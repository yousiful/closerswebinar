import { Building2, Megaphone, HandshakeIcon, Sparkles, Lock, ArrowRight, Users } from 'lucide-react';

export function FreedomClub() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-emerald-950/20 to-slate-900" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/8 rounded-full blur-3xl animate-warm-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl animate-cozy-breathe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-emerald-500/15 via-teal-500/15 to-cyan-500/15 backdrop-blur-sm border-2 border-emerald-500/40 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl shadow-emerald-500/15 hover:shadow-emerald-500/25 transition-shadow duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 to-transparent animate-cozy-breathe" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-warm-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-warm-pulse" style={{ animationDelay: '1.5s' }} />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3 animate-fade-in-down">
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-2.5">
                  <Lock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-emerald-400 font-bold text-lg">The Freedom Club</div>
                  <div className="text-slate-400 text-sm">Invitation-Only Network. Available Only to Certified Closers</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-4 py-2 animate-warm-glow">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-recording-pulse" />
                <span className="text-red-300 font-semibold text-sm">Access Limited. Only 47 Spots in This Cohort</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Most Coveted Network
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                in High-Ticket Sales
              </span>
            </h2>

            <p className="text-xl text-slate-200 mb-10 max-w-3xl leading-relaxed">
              750+ premium service providers with active ad budgets are waiting right now for certified closers to handle their inbound pipeline. This is not theory. This is immediate opportunity.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Building2,
                  color: 'text-emerald-400',
                  hoverBorder: 'hover:border-emerald-400/50 hover:shadow-emerald-400/20',
                  stat: '750+',
                  label: 'Verified providers seeking closers urgently',
                },
                {
                  icon: Megaphone,
                  color: 'text-amber-400',
                  hoverBorder: 'hover:border-amber-400/50 hover:shadow-amber-400/20',
                  stat: '$2M+',
                  label: 'Combined daily ad spend generating your leads',
                },
                {
                  icon: HandshakeIcon,
                  color: 'text-teal-400',
                  hoverBorder: 'hover:border-teal-400/50 hover:shadow-teal-400/20',
                  stat: '$10K+',
                  label: 'Average ticket price on every deal you close',
                },
              ].map((card, i) => (
                <div key={i} className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 ${card.hoverBorder} hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-400 group`}>
                  <card.icon className={`w-10 h-10 ${card.color} mb-4 group-hover:scale-110 transition-all duration-300`} />
                  <div className={`text-3xl font-bold text-white mb-2 ${card.color.replace('text-', 'group-hover:text-')}`}>{card.stat}</div>
                  <p className="text-slate-300 text-sm group-hover:text-slate-100 transition-colors">{card.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm border border-white/15 rounded-2xl p-8 mb-10">
              <h3 className="text-xl font-bold text-white mb-6">Why Freedom Club Is Impossible to Replicate Elsewhere</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    dot: 'bg-emerald-400',
                    title: 'Pre-Qualified Inbound Leads',
                    body: 'Every provider is actively spending on ads. Their inbound leads are already interested. You just need to close them.',
                  },
                  {
                    dot: 'bg-amber-400',
                    title: 'Premium Packages Only at $3K to $50K',
                    body: 'We\'ve curated the network strictly to high-ticket offers. No wasted effort on low-commission products.',
                  },
                  {
                    dot: 'bg-teal-400',
                    title: '48-Hour Placement After Certification',
                    body: 'Opportunities arrive the same week you certify. Not months later. Income starts fast.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                    <div className={`w-2 h-2 ${item.dot} rounded-full mt-2 flex-shrink-0 shadow-lg`} />
                    <div>
                      <div className="text-white font-semibold mb-1 text-sm">{item.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://go.mediatraffics.com/intro-video"
                className="flex-1 sm:flex-none bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-3"
              >
                Secure My Freedom Club Spot
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Users className="w-4 h-4 text-emerald-400" />
                <span><span className="text-white font-semibold">312 closers</span> earned commissions last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
