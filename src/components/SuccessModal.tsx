import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-emerald-500/30 rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-emerald-500/20 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-subtle shadow-lg shadow-emerald-500/30">
            <CheckCircle className="w-12 h-12 text-emerald-400 animate-pulse" />
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">
            Welcome to Your Future!
          </h3>

          <p className="text-slate-300 mb-6 leading-relaxed">
            Thank you for taking the first step towards your high-ticket closing career.
            Our team will review your application and reach out within 24 hours with next steps.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <h4 className="font-semibold text-white mb-3">What happens next?</h4>
            <ul className="text-left space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">1.</span>
                <span>Check your email for a confirmation message</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">2.</span>
                <span>Our team will contact you within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">3.</span>
                <span>Schedule your strategy call to get started</span>
              </li>
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
}
