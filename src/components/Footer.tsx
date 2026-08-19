import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">High-Ticket Closer Academy</h3>
            <p className="text-slate-400 leading-relaxed">
              Empowering professionals to build six-figure remote closing careers through expert training and exclusive opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:support@mediatraffics.com" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4" />
                support@mediatraffics.com
              </a>
              <a href="tel:+18286772148" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4" />
                Call a recruiter: (828) 677-2148
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="block text-slate-400 hover:text-emerald-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; {currentYear} High-Ticket Closer Academy. All rights reserved.</p>
            <p className="mt-2">Results may vary. Your success depends on your effort, dedication, and market conditions.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
