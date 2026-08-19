import { useState, useCallback } from 'react';
import { errorLogger } from '../services/errorLogger';

interface ErrorState {
  error: Error | null;
  hasError: boolean;
}

export function useErrorHandler(component?: string) {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    hasError: false,
  });

  const handleError = useCallback((error: Error | string, context?: Record<string, unknown>) => {
    const errorObj = error instanceof Error ? error : new Error(error);

    setErrorState({
      error: errorObj,
      hasError: true,
    });

    errorLogger.log(errorObj, {
      component,
      severity: 'medium',
      context,
    });
  }, [component]);

  const clearError = useCallback(() => {
    setErrorState({
      error: null,
      hasError: false,
    });
  }, []);

  return {
    error: errorState.error,
    hasError: errorState.hasError,
    handleError,
    clearError,
  };
}
