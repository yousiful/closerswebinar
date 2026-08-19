# Comprehensive Error Handling System

A production-ready error handling system with graceful degradation, user-friendly messages, offline support, and error logging.

## Features

✅ **Error Boundaries** - Catches React component errors
✅ **Network Error Handling** - Graceful handling of network failures
✅ **API Error Management** - Smart retry logic and status code handling
✅ **Validation System** - Form validation with user-friendly messages
✅ **Offline Support** - Queue errors when offline, sync when online
✅ **Error Logging** - Automatic logging to Supabase database
✅ **User-Friendly UI** - Beautiful error messages and indicators
✅ **TypeScript Support** - Full type safety throughout

## Quick Start

### 1. The app is already wrapped with error handling

```tsx
import { ErrorBoundary } from './components/ErrorBoundary';
import { OfflineIndicator } from './components/OfflineIndicator';

function App() {
  return (
    <ErrorBoundary>
      <YourApp />
      <OfflineIndicator />
    </ErrorBoundary>
  );
}
```

### 2. Handle API errors with automatic retry

```tsx
import { handleApiCall, getUserFriendlyMessage } from './utils/apiErrorHandler';

async function fetchData() {
  try {
    const data = await handleApiCall(
      async () => {
        const response = await fetch('/api/data');
        if (!response.ok) throw response;
        return response.json();
      },
      {
        endpoint: '/data',
        retries: 3,
        retryDelay: 1000
      }
    );
    return data;
  } catch (error) {
    const message = getUserFriendlyMessage(error);
    // Show to user
  }
}
```

### 3. Use the error handling hook

```tsx
import { useErrorHandler } from './hooks/useErrorHandler';
import { ErrorMessage } from './components/ErrorMessage';

function MyComponent() {
  const { error, hasError, handleError, clearError } = useErrorHandler('MyComponent');

  const doSomething = async () => {
    try {
      await riskyOperation();
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div>
      {hasError && (
        <ErrorMessage
          message={error.message}
          onDismiss={clearError}
        />
      )}
    </div>
  );
}
```

## Core Components

### ErrorBoundary
Catches React errors and displays a fallback UI. Automatically logs errors.

**Props:**
- `children` - Components to wrap
- `fallback` - Custom error UI (optional)
- `onError` - Error callback (optional)

### OfflineIndicator
Shows a notification when the user goes offline/online.

### ErrorMessage
Displays user-friendly error messages with optional actions.

**Props:**
- `title` - Error title (default: "Error")
- `message` - Error description
- `onDismiss` - Dismiss handler (optional)
- `action` - Action button config (optional)

### RetryButton
Button component with loading state for retry actions.

## Utilities

### apiErrorHandler

**Functions:**
- `handleApiCall(apiCall, options)` - Wrapper for API calls with retry logic
- `getUserFriendlyMessage(error)` - Converts errors to user-friendly messages
- `createAbortController(timeout)` - Creates controller with timeout
- `isNetworkError(error)` - Check if error is network-related
- `isApiError(error)` - Check if error is API-related
- `isValidationError(error)` - Check if error is validation-related

**Error Types:**
- `ApiError` - API-specific errors with status codes
- `NetworkError` - Network connectivity errors
- `ValidationError` - Form validation errors

### validators

**Functions:**
- `validateEmail(email)` - Email validation
- `validatePhone(phone)` - Phone number validation
- `validateRequired(value, fieldName)` - Required field validation
- `validateMinLength(value, length, fieldName)` - Min length validation
- `validateMaxLength(value, length, fieldName)` - Max length validation
- `validateForm(data, rules)` - Comprehensive form validation

## Hooks

### useErrorHandler
Custom hook for component-level error handling.

**Returns:**
- `error` - Current error object
- `hasError` - Boolean indicating error state
- `handleError(error, context)` - Error handler function
- `clearError()` - Clear error function

### useOnlineStatus
Tracks network connectivity status.

**Returns:**
- `isOnline` - Boolean indicating online status

## Error Logging

Errors are automatically logged to Supabase with:
- Error message and stack trace
- Component name
- User agent and URL
- Timestamp and severity
- Custom context

### Manual Logging

```tsx
import { errorLogger } from './services/errorLogger';

errorLogger.log(new Error('Custom error'), {
  component: 'MyComponent',
  severity: 'high',
  context: { userId: '123', action: 'submit' }
});
```

### Offline Queue
Errors are queued in localStorage when offline and synced when connection is restored.

## Error Severity Levels

- **low** - Minor issues, non-critical
- **medium** - Standard errors, user-facing
- **high** - Important errors affecting functionality
- **critical** - System-breaking errors requiring immediate attention

## Common Patterns

### Network Request with Timeout

```tsx
import { createAbortController } from './utils/apiErrorHandler';

const { signal, abort } = createAbortController(5000);

try {
  const response = await fetch('/api/data', { signal });
  const data = await response.json();
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Request timed out');
  }
} finally {
  abort();
}
```

### Form Validation

```tsx
import { validateEmail, validateRequired } from './utils/validators';

const errors = {};
const emailError = validateEmail(formData.email);
const nameError = validateRequired(formData.name, 'Name');

if (emailError) errors.email = emailError;
if (nameError) errors.name = nameError;

if (Object.keys(errors).length > 0) {
  setErrors(errors);
  return;
}
```

### Conditional Error Types

```tsx
import {
  isNetworkError,
  isApiError,
  getUserFriendlyMessage
} from './utils/apiErrorHandler';

try {
  await apiCall();
} catch (error) {
  if (isNetworkError(error)) {
    showOfflineMessage();
  } else if (isApiError(error) && error.statusCode === 401) {
    redirectToLogin();
  } else {
    showError(getUserFriendlyMessage(error));
  }
}
```

## Database Schema

The `error_logs` table is automatically created with the following structure:

```sql
error_logs (
  id uuid PRIMARY KEY,
  message text NOT NULL,
  stack text,
  component text,
  user_agent text NOT NULL,
  url text NOT NULL,
  timestamp timestamptz NOT NULL,
  severity text NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  context jsonb,
  created_at timestamptz DEFAULT now()
)
```

## Best Practices

1. **Always wrap async operations in try-catch**
   ```tsx
   try {
     await riskyOperation();
   } catch (error) {
     handleError(error);
   }
   ```

2. **Use specific error types**
   ```tsx
   throw new ApiError('Failed', 404, '/api/users');
   throw new ValidationError('Invalid email', { email: 'Invalid format' });
   ```

3. **Provide context with errors**
   ```tsx
   handleError(error, {
     userId: currentUser.id,
     action: 'checkout',
     amount: total
   });
   ```

4. **Show user-friendly messages**
   ```tsx
   const message = getUserFriendlyMessage(error);
   showToast(message);
   ```

5. **Implement offline support**
   ```tsx
   const isOnline = useOnlineStatus();

   if (!isOnline) {
     queueForLater(data);
     return;
   }
   ```

6. **Use error boundaries for components**
   ```tsx
   <ErrorBoundary fallback={<CustomError />}>
     <ComplexComponent />
   </ErrorBoundary>
   ```

## Development vs Production

In **development mode**, error boundaries show detailed error information including stack traces.

In **production mode**, users see friendly error messages while detailed logs are sent to the database.

## Performance

- Error logging is asynchronous and non-blocking
- Failed logs are queued in localStorage (max 50 items)
- Network status changes trigger automatic queue flush
- Minimal overhead on app performance

## Browser Support

- Modern browsers with Fetch API support
- localStorage for offline queue
- Online/offline event listeners
- Abort controllers for request timeouts

## See Also

- `EXAMPLE_USAGE.md` - Detailed examples and code snippets
- `src/services/errorLogger.ts` - Error logging service
- `src/utils/apiErrorHandler.ts` - API error utilities
- `src/components/ErrorBoundary.tsx` - Error boundary component
