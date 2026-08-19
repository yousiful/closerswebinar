import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      setTimeout(() => setShowReconnected(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showReconnected) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 animate-fade-in-up ${
        isOnline ? 'bg-emerald-500/90' : 'bg-red-500/90'
      } backdrop-blur-sm text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3`}
    >
      {isOnline ? (
        <>
          <Wifi className="w-5 h-5" />
          <span className="font-semibold">Back Online</span>
        </>
      ) : (
        <>
          <WifiOff className="w-5 h-5" />
          <span className="font-semibold">No Internet Connection</span>
        </>
      )}
    </div>
  );
}
