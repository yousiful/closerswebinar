export interface ErrorLog {
  message: string;
  stack?: string;
  component?: string;
  user_agent: string;
  url: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  context?: Record<string, unknown>;
}

class ErrorLogger {
  log(error: Error | string, options: {
    component?: string;
    severity?: ErrorLog['severity'];
    context?: Record<string, unknown>;
  } = {}) {
    const errorLog: ErrorLog = {
      message: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      component: options.component,
      user_agent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      severity: options.severity || 'medium',
      context: options.context,
    };

    console.error('Error logged:', errorLog);
  }
}

export const errorLogger = new ErrorLogger();
