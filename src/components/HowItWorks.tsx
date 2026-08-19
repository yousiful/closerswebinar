import { BookOpen, UserCheck, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    step: '01',
    timeframe: 'Days 1–7',
    timeColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    title: 'Train Daily With Experts',
    description: 'Every morning you join live sessions with elite closers covering objection handling, tonality, pipeline management, and buyer psychology. Each session sharpens skills that directly translate into commission.',
    bullets: ['Live sessions every weekday', 'Real call recordings dissected live', 'Immediate technique feedback'],
    iconBg: 'from-amber-500 to-orange-500',
    iconShadow: 'shadow-amber-500/30',
  },
  {
    icon: UserCheck,
    step: '02',
    timeframe: 'Days 8–14',
    timeColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    title: 'Earn Your Certification',
    description: 'Pass a live performance evaluation. Not a written quiz but a real scenario with a senior closer judging your readiness. This credential unlocks Freedom Club access and commands premium rates.',
    bullets: ['Live performance evaluation', 'Industry-recognized credential', 'Instant Freedom Club eligibility'],
    iconBg: 'from-emerald-500 to-teal-500',
    iconShadow: 'shadow-emerald-500/30',
  },
  {
    icon: Rocket,
    step: '03',
    timeframe: 'Day 15',
    timeColor: 'text-teal-400 bg-teal-500/15 border-teal-500/30',
    title: 'Get Connected Fast',
    description: 'Within 48 hours of certification, you\'re matched with Freedom Club providers who have active ad campaigns and pre-qualified leads waiting. No cold outreach needed. Opportunities flow directly to you.',
    bullets: ['48-hour placement guarantee', 'Matched to ideal niches', 'Pre-qualified leads delivered'],
    iconBg: 'from-teal-500 to-cyan-500',
    iconShadow: 'shadow-teal-500/30',
  },
  {
    icon: TrendingUp,
    step: '04',
    timeframe: 'Day 21+',
    timeColor: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
    title: 'Close Deals. Stack Income.',
    description: 'Your commission checks compound as daily training keeps your edge razor-sharp. Top closers layer multiple providers simultaneously, turning one income stream into an income machine.',
    bullets: ['$3K–$50K per deal commissions', 'Multiple income streams', 'Daily training maintains your edge'],
    iconBg: 'from-cyan-500 to-emerald-500',
    iconShadow: 'shadow-cyan-500/30',
  },
];

export function HowItWorks() {
  return (
    <div className="py-24 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-5 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-semibold text-sm">From Zero to First Close in Under 21 Days</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Fast-Track to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Freedom</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A precision-designed 4-step path where every day of daily training brings you measurably closer to your first commission check.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-500/40 via-emerald-500/40 via-teal-500/40 to-cyan-500/40" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className={`bg-gradient-to-br ${step.iconBg} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${step.iconShadow} group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`text-xs font-bold border rounded-full px-3 py-1 ${step.timeColor}`}>
                    {step.timeframe}
                  </span>
                </div>

                <div className="text-5xl font-bold text-white/8 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-5 flex-1">{step.description}</p>

                <ul className="space-y-2 border-t border-white/8 pt-4">
                  {step.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://go.mediatraffics.com/intro-video"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30"
          >
            Start My 21-Day Journey and Secure My Spot
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-slate-400 mt-3">Spots are critically limited. Next cohort starts soon</p>
        </div>
      </div>
    </div>
  );
}
