import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface RetryButtonProps {
  onRetry: () => Promise<void> | void;
  children?: React.ReactNode;
  className?: string;
}

export function RetryButton({ onRetry, children = 'Retry', className = '' }: RetryButtonProps) {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      await onRetry();
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <button
      onClick={handleRetry}
      disabled={isRetrying}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <RefreshCw className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`} />
      {children}
    </button>
  );
}
