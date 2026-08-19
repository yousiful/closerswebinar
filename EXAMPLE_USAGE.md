# Error Handling Examples

This document provides examples of how to use the comprehensive error handling system in your application.

## Table of Contents
1. [Error Boundary Usage](#error-boundary-usage)
2. [Network Error Handling](#network-error-handling)
3. [API Error Handling](#api-error-handling)
4. [Validation Errors](#validation-errors)
5. [Custom Error Handling Hook](#custom-error-handling-hook)
6. [Offline Support](#offline-support)

---

## Error Boundary Usage

Wrap components that might throw errors with the ErrorBoundary component:

```tsx
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}

// With custom fallback
function AppWithCustomFallback() {
  return (
    <ErrorBoundary
      fallback={<CustomErrorUI />}
      onError={(error, errorInfo) => {
        console.log('Error caught:', error);
      }}
    >
      <YourComponent />
    </ErrorBoundary>
  );
}
```

---

## Network Error Handling

### Basic Fetch with Error Handling

```tsx
import { handleApiCall, getUserFriendlyMessage } from './utils/apiErrorHandler';
import { ErrorMessage } from './components/ErrorMessage';
import { useState } from 'react';

function DataFetcher() {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const result = await handleApiCall(
        async () => {
          const response = await fetch('https://api.example.com/data');
          if (!response.ok) throw response;
          return response.json();
        },
        {
          endpoint: '/data',
          retries: 3,
          retryDelay: 1000,
          onError: (error) => {
            setError(getUserFriendlyMessage(error));
          }
        }
      );
      setData(result);
      setError(null);
    } catch (err) {
      // Error already handled in onError callback
    }
  };

  return (
    <div>
      {error && (
        <ErrorMessage
          message={error}
          onDismiss={() => setError(null)}
          action={{
            label: 'Try Again',
            onClick: fetchData
          }}
        />
      )}
      {/* Rest of component */}
    </div>
  );
}
```

### With Timeout and Abort Controller

```tsx
import { createAbortController } from './utils/apiErrorHandler';

async function fetchWithTimeout() {
  const { signal, abort } = createAbortController(5000); // 5 second timeout

  try {
    const response = await fetch('https://api.example.com/data', { signal });
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  } finally {
    abort(); // Clean up timeout
  }
}
```

---

## API Error Handling

### Using the handleApiCall Wrapper

```tsx
import { handleApiCall, ApiError } from './utils/apiErrorHandler';
import { supabase } from './lib/supabase';

async function submitForm(formData) {
  try {
    const result = await handleApiCall(
      async () => {
        const { data, error } = await supabase
          .from('leads')
          .insert([formData]);

        if (error) {
          throw new ApiError(
            error.message,
            error.code === 'PGRST116' ? 409 : 500,
            'leads',
            { formData }
          );
        }

        return data;
      },
      {
        endpoint: '/leads',
        retries: 2,
        onError: (error) => {
          console.error('Form submission failed:', error);
        }
      }
    );

    return result;
  } catch (error) {
    // Handle error or show user message
    throw error;
  }
}
```

### Handling Different Error Types

```tsx
import {
  isNetworkError,
  isApiError,
  isValidationError,
  getUserFriendlyMessage
} from './utils/apiErrorHandler';

async function handleRequest() {
  try {
    await someApiCall();
  } catch (error) {
    if (isNetworkError(error)) {
      // Show offline message
      return 'You appear to be offline. Please check your connection.';
    }

    if (isApiError(error)) {
      // Handle API-specific errors
      if (error.statusCode === 401) {
        // Redirect to login
        window.location.href = '/login';
      }
      return getUserFriendlyMessage(error);
    }

    if (isValidationError(error)) {
      // Show validation errors
      const fields = error.fields;
      return Object.entries(fields || {}).map(([field, message]) =>
        `${field}: ${message}`
      ).join(', ');
    }

    // Generic error handling
    return getUserFriendlyMessage(error);
  }
}
```

---

## Validation Errors

### Form Validation Example

```tsx
import { validateForm, validateEmail, validateRequired } from './utils/validators';
import { ValidationError } from './utils/apiErrorHandler';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const nameError = validateRequired(formData.name, 'Name');
    const emailError = validateEmail(formData.email);
    const messageError = validateRequired(formData.message, 'Message');

    const validationErrors: Record<string, string> = {};
    if (nameError) validationErrors.name = nameError;
    if (emailError) validationErrors.email = emailError;
    if (messageError) validationErrors.message = messageError;

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit form
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Advanced Validation with Rules

```tsx
import { validateForm } from './utils/validators';

const formData = {
  username: 'john',
  email: 'john@example.com',
  age: 25
};

const rules = {
  username: [
    {
      validate: (value: string) => value.length >= 3,
      message: 'Username must be at least 3 characters'
    },
    {
      validate: (value: string) => /^[a-zA-Z0-9_]+$/.test(value),
      message: 'Username can only contain letters, numbers, and underscores'
    }
  ],
  email: [
    {
      validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Please enter a valid email address'
    }
  ],
  age: [
    {
      validate: (value: number) => value >= 18,
      message: 'You must be at least 18 years old'
    }
  ]
};

const { isValid, errors } = validateForm(formData, rules);

if (!isValid) {
  console.log('Validation errors:', errors);
}
```

---

## Custom Error Handling Hook

### Using useErrorHandler Hook

```tsx
import { useErrorHandler } from './hooks/useErrorHandler';
import { ErrorMessage } from './components/ErrorMessage';

function UserProfile() {
  const { error, hasError, handleError, clearError } = useErrorHandler('UserProfile');
  const [user, setUser] = useState(null);

  const loadUserData = async () => {
    try {
      clearError();
      const response = await fetch('/api/user');
      if (!response.ok) {
        throw new Error('Failed to load user data');
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      handleError(err instanceof Error ? err : new Error(String(err)), {
        action: 'loadUserData',
        userId: 'current'
      });
    }
  };

  return (
    <div>
      {hasError && error && (
        <ErrorMessage
          message={error.message}
          onDismiss={clearError}
          action={{
            label: 'Retry',
            onClick: loadUserData
          }}
        />
      )}
      {/* Rest of component */}
    </div>
  );
}
```

---

## Offline Support

### Using the Offline Indicator

The OfflineIndicator component is automatically included in the App component and will show/hide based on network status.

### Using the useOnlineStatus Hook

```tsx
import { useOnlineStatus } from './hooks/useOnlineStatus';

function DataSync() {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (isOnline) {
      // Sync pending data when connection is restored
      syncPendingData();
    }
  }, [isOnline]);

  return (
    <div>
      {!isOnline && (
        <div className="bg-yellow-500/20 p-4 rounded">
          You're offline. Changes will be saved locally and synced when you're back online.
        </div>
      )}
    </div>
  );
}
```

### Queueing Requests for Offline Support

```tsx
import { handleApiCall } from './utils/apiErrorHandler';

async function saveDataWithOfflineSupport(data) {
  // Save to local storage first
  localStorage.setItem('pending_data', JSON.stringify(data));

  try {
    await handleApiCall(
      async () => {
        const response = await fetch('/api/data', {
          method: 'POST',
          body: JSON.stringify(data)
        });
        if (!response.ok) throw response;
        return response.json();
      },
      {
        endpoint: '/data',
        retries: 3
      }
    );

    // Clear local storage on success
    localStorage.removeItem('pending_data');
  } catch (error) {
    console.log('Will retry when online');
  }
}

// On app startup or when coming back online
window.addEventListener('online', () => {
  const pendingData = localStorage.getItem('pending_data');
  if (pendingData) {
    saveDataWithOfflineSupport(JSON.parse(pendingData));
  }
});
```

---

## Error Logging

Errors are automatically logged to the Supabase database. The error logger queues errors when offline and syncs them when connection is restored.

### Manual Error Logging

```tsx
import { errorLogger } from './services/errorLogger';

// Log an error manually
errorLogger.log(new Error('Something went wrong'), {
  component: 'MyComponent',
  severity: 'high',
  context: {
    userId: '123',
    action: 'submitForm'
  }
});

// Log a string error
errorLogger.log('Custom error message', {
  component: 'AnotherComponent',
  severity: 'low'
});
```

---

## Database Setup

To enable error logging, create the `error_logs` table in Supabase:

```sql
CREATE TABLE IF NOT EXISTS error_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message text NOT NULL,
  stack text,
  component text,
  user_agent text NOT NULL,
  url text NOT NULL,
  timestamp timestamptz NOT NULL,
  severity text NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  context jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert error logs
CREATE POLICY "Anyone can log errors"
  ON error_logs
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated admins can view error logs
CREATE POLICY "Only admins can view error logs"
  ON error_logs
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for better query performance
CREATE INDEX idx_error_logs_timestamp ON error_logs(timestamp DESC);
CREATE INDEX idx_error_logs_severity ON error_logs(severity);
```
