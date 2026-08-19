import { useState, FormEvent } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { submitLead } from '../lib/supabase';

interface LeadFormProps {
  onSuccess: () => void;
}

export function LeadForm({ onSuccess }: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await submitLead({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone || undefined,
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || undefined,
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || undefined
      });

      setFormData({ full_name: '', email: '', phone: '' });
      onSuccess();

      setTimeout(() => {
        window.location.href = 'https://go.mediatraffics.com/intro-video';
      }, 2000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-8 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-500 animate-fade-in-up">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Claim Your Spot Now</h3>
        <p className="text-slate-300">Join hundreds of successful closers</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-300 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/50 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 flex items-center gap-2">
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Get Instant Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
        </button>

        <p className="text-xs text-slate-400 text-center">
          By submitting, you agree to receive communication about our training program.
        </p>
      </form>
    </div>
  );
}
