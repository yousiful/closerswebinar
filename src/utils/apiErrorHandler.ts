import { errorLogger } from '../services/errorLogger';

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string,
    public context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class NetworkError extends Error {
  constructor(message: string = 'Network request failed') {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public fields?: Record<string, string>
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function isNetworkError(error: unknown): error is NetworkError {
  return error instanceof Error && error.name === 'NetworkError';
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof Error && error.name === 'ApiError';
}

export function isValidationError(error: unknown): error is ValidationError {
  return error instanceof Error && error.name === 'ValidationError';
}

export function getUserFriendlyMessage(error: unknown): string {
  if (isNetworkError(error)) {
    return 'Unable to connect. Please check your internet connection and try again.';
  }

  if (isApiError(error)) {
    const apiError = error as ApiError;

    if (apiError.statusCode === 401) {
      return 'Your session has expired. Please refresh the page and try again.';
    }

    if (apiError.statusCode === 403) {
      return 'You do not have permission to perform this action.';
    }

    if (apiError.statusCode === 404) {
      return 'The requested resource was not found.';
    }

    if (apiError.statusCode === 429) {
      return 'Too many requests. Please wait a moment and try again.';
    }

    if (apiError.statusCode && apiError.statusCode >= 500) {
      return 'Our servers are experiencing issues. Please try again later.';
    }

    return apiError.message || 'An error occurred. Please try again.';
  }

  if (isValidationError(error)) {
    return error.message || 'Please check your input and try again.';
  }

  if (error instanceof Error) {
    return error.message || 'An unexpected error occurred.';
  }

  return 'An unexpected error occurred. Please try again.';
}

export async function handleApiCall<T>(
  apiCall: () => Promise<T>,
  options: {
    endpoint?: string;
    retries?: number;
    retryDelay?: number;
    onError?: (error: Error) => void;
  } = {}
): Promise<T> {
  const { endpoint, retries = 0, retryDelay = 1000, onError } = options;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      lastError = parseError(error, endpoint);

      if (attempt < retries && isRetryable(lastError)) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)));
        continue;
      }

      errorLogger.log(lastError, {
        component: 'ApiHandler',
        severity: 'high',
        context: {
          endpoint,
          attempt: attempt + 1,
          maxRetries: retries,
        },
      });

      onError?.(lastError);
      throw lastError;
    }
  }

  throw lastError || new Error('API call failed');
}

function parseError(error: unknown, endpoint?: string): Error {
  if (!navigator.onLine) {
    return new NetworkError();
  }

  if (error instanceof Response) {
    return new ApiError(
      'Request failed',
      error.status,
      endpoint
    );
  }

  if (error instanceof Error) {
    if (error.name === 'AbortError') {
      return new NetworkError('Request was cancelled');
    }

    if (error.message.includes('fetch') || error.message.includes('network')) {
      return new NetworkError();
    }

    return error;
  }

  return new Error('An unknown error occurred');
}

function isRetryable(error: Error): boolean {
  if (isNetworkError(error)) {
    return true;
  }

  if (isApiError(error)) {
    const retryableStatuses = [408, 429, 500, 502, 503, 504];
    return error.statusCode ? retryableStatuses.includes(error.statusCode) : false;
  }

  return false;
}

export function createAbortController(timeoutMs: number = 30000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  return {
    signal: controller.signal,
    abort: () => {
      clearTimeout(timeoutId);
      controller.abort();
    },
  };
}
