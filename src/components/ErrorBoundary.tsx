import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { errorLogger } from '../services/errorLogger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
  retryCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    errorLogger.log(error, {
      component: 'ErrorBoundary',
      severity: 'high',
      context: {
        componentStack: errorInfo.componentStack,
        retryCount: this.state.retryCount,
      },
    });

    this.setState({
      errorInfo,
    });

    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState((prevState) => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-red-500/30 rounded-3xl p-8 shadow-2xl shadow-red-500/20">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Something Went Wrong
            </h2>

            <p className="text-slate-300 mb-6 text-center leading-relaxed">
              We encountered an unexpected error. Don't worry, our team has been notified and we're working on a fix.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-slate-900/50 border border-red-500/30 rounded-xl p-4 mb-6 overflow-auto">
                <p className="text-red-300 text-sm font-mono break-words">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-slate-400 text-xs mt-2 overflow-auto max-h-40">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleReset}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl transition-all border border-white/20"
              >
                Go to Homepage
              </button>
            </div>

            {this.state.retryCount > 0 && (
              <p className="text-xs text-slate-400 text-center mt-4">
                Retry attempt: {this.state.retryCount}
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
