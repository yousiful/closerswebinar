import { supabase } from '../lib/supabase';

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
  private queue: ErrorLog[] = [];
  private isOnline = navigator.onLine;
  private maxQueueSize = 50;

  constructor() {
    this.setupOnlineListener();
    this.loadQueueFromStorage();
  }

  private setupOnlineListener() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushQueue();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  private loadQueueFromStorage() {
    try {
      const stored = localStorage.getItem('error_queue');
      if (stored) {
        this.queue = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load error queue from storage:', error);
    }
  }

  private saveQueueToStorage() {
    try {
      localStorage.setItem('error_queue', JSON.stringify(this.queue));
    } catch (error) {
      console.error('Failed to save error queue to storage:', error);
    }
  }

  async log(error: Error | string, options: {
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

    if (this.isOnline) {
      await this.sendToServer(errorLog);
    } else {
      this.addToQueue(errorLog);
    }
  }

  private async sendToServer(errorLog: ErrorLog) {
    try {
      const { error } = await supabase
        .from('error_logs')
        .insert([errorLog]);

      if (error) {
        console.error('Failed to log error to server:', error);
        this.addToQueue(errorLog);
      }
    } catch (err) {
      console.error('Exception while logging to server:', err);
      this.addToQueue(errorLog);
    }
  }

  private addToQueue(errorLog: ErrorLog) {
    this.queue.push(errorLog);

    if (this.queue.length > this.maxQueueSize) {
      this.queue = this.queue.slice(-this.maxQueueSize);
    }

    this.saveQueueToStorage();
  }

  private async flushQueue() {
    if (this.queue.length === 0) return;

    const logsToSend = [...this.queue];
    this.queue = [];
    this.saveQueueToStorage();

    try {
      const { error } = await supabase
        .from('error_logs')
        .insert(logsToSend);

      if (error) {
        console.error('Failed to flush error queue:', error);
        this.queue = logsToSend;
        this.saveQueueToStorage();
      }
    } catch (err) {
      console.error('Exception while flushing queue:', err);
      this.queue = logsToSend;
      this.saveQueueToStorage();
    }
  }
}

export const errorLogger = new ErrorLogger();
