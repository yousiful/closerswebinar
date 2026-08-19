import { AlertCircle, X } from 'lucide-react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function ErrorMessage({
  title = 'Error',
  message,
  onDismiss,
  action
}: ErrorMessageProps) {
  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 animate-fade-in-up relative">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <AlertCircle className="w-5 h-5 text-red-400" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-red-300 mb-1">{title}</h4>
          <p className="text-sm text-red-200 leading-relaxed">{message}</p>

          {action && (
            <button
              onClick={action.onClick}
              className="mt-3 text-sm font-semibold text-red-300 hover:text-red-200 underline transition-colors"
            >
              {action.label}
            </button>
          )}
        </div>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 text-red-400 hover:text-red-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
