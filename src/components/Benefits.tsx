import { Award, Users, DollarSign, Calendar, Target, Trophy, Zap, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: Calendar,
    badge: 'CORE DIFFERENTIATOR',
    badgeColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    title: 'Daily Live Expert Training',
    description: 'Every single morning, elite closers coach you live with the freshest objection-handling tactics and real-time market intelligence. Techniques no course or pre-recorded video can replicate.',
    highlight: true,
  },
  {
    icon: Zap,
    badge: 'EXCLUSIVE',
    badgeColor: 'text-orange-400 bg-orange-500/15 border-orange-500/30',
    title: 'Real-Time Market Insights',
    description: 'Today\'s buyers require today\'s strategies. Our trainers adapt daily sessions to current market conditions, buyer psychology shifts, and emerging objections. This keeps you ahead of every competitor.',
    highlight: false,
  },
  {
    icon: RefreshCw,
    badge: 'DAILY',
    badgeColor: 'text-teal-400 bg-teal-500/15 border-teal-500/30',
    title: 'Compounding Skill Growth',
    description: 'Consistent daily reps compound dramatically. Students who train daily close 3x more deals by week 4 than those who skip sessions. Show up every day, earn every day.',
    highlight: false,
  },
  {
    icon: DollarSign,
    badge: 'HIGH-VALUE',
    badgeColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    title: 'Immediate $10K+ Opportunities',
    description: 'Stop chasing cold leads. The moment you certify, Freedom Club providers with active ad budgets compete for your skills. Your first close could come within 48 hours of graduating.',
    highlight: false,
  },
  {
    icon: Users,
    badge: '750+ PROVIDERS',
    badgeColor: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
    title: 'Freedom Club Exclusive Network',
    description: 'An invitation-only ecosystem of 750+ premium service providers with pre-qualified leads ready to close. This pipeline is unavailable anywhere else. It\'s our most jealously guarded asset.',
    highlight: false,
  },
  {
    icon: Award,
    badge: 'CERTIFIED',
    badgeColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    title: 'Industry-Recognized Certification',
    description: 'Our certification is the gold standard in high-ticket remote sales. It signals trust, competence, and commands premium commission rates that uncertified closers simply cannot access.',
    highlight: false,
  },
];

const trainingSchedule = [
  { time: '9:00 AM', topic: 'Live Objection Handling Drill', active: true },
  { time: '11:30 AM', topic: 'Call Recording Breakdown & Analysis', active: false },
  { time: '2:00 PM', topic: 'Advanced Tonality & Pacing Workshop', active: false },
  { time: '4:30 PM', topic: '1-on-1 Closer Coaching Slots', active: false },
];

export function Benefits() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-warm-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-cozy-breathe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-5 py-2 mb-6">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 font-semibold text-sm">Our Unfair Advantage Over Every Other Program</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Daily Training</span> Changes Everything
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Most programs hand you a course and wish you luck. We coach you live every single day because sales skills die without daily reps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border rounded-2xl p-7 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group cursor-pointer ${
                  benefit.highlight
                    ? 'border-amber-500/40 shadow-lg shadow-amber-500/10 hover:border-amber-400/60 hover:shadow-amber-500/20'
                    : 'border-white/10 hover:border-emerald-500/40 hover:shadow-emerald-500/10'
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                    benefit.highlight
                      ? 'bg-gradient-to-br from-amber-500/30 to-orange-500/20'
                      : 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20'
                  }`}>
                    <benefit.icon className={`w-7 h-7 transition-colors ${benefit.highlight ? 'text-amber-400' : 'text-emerald-400'}`} />
                  </div>
                  <span className={`text-xs font-bold tracking-widest border rounded-full px-2.5 py-1 ${benefit.badgeColor}`}>
                    {benefit.badge}
                  </span>
                </div>
                <h3 className={`text-lg font-bold text-white mb-2.5 group-hover:transition-colors ${benefit.highlight ? 'group-hover:text-amber-300' : 'group-hover:text-emerald-300'} transition-colors`}>
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 rounded-2xl p-6 animate-float-delayed h-fit">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-recording-pulse" />
              <span className="text-white font-bold">Today's Training Schedule</span>
            </div>

            <div className="space-y-3 mb-6">
              {trainingSchedule.map((session, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    session.active
                      ? 'bg-amber-500/15 border border-amber-500/30'
                      : 'bg-white/5 border border-white/8'
                  }`}
                >
                  <div className="text-right flex-shrink-0 w-16">
                    <div className={`text-xs font-mono font-bold ${session.active ? 'text-amber-400' : 'text-slate-500'}`}>
                      {session.time}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-semibold leading-tight ${session.active ? 'text-white' : 'text-slate-400'}`}>
                      {session.topic}
                    </div>
                  </div>
                  {session.active && (
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-warm-pulse flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-5">
              <div className="text-xs text-slate-500 mb-3 font-semibold uppercase tracking-wider">This Week's Skill Progress</div>
              {[
                { label: 'Objection Handling', pct: 87 },
                { label: 'Tonality & Pacing', pct: 72 },
                { label: 'Closing Frameworks', pct: 94 },
              ].map((skill, i) => (
                <div key={i} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{skill.label}</span>
                    <span className="text-emerald-400 font-semibold">{skill.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full animate-progress-fill"
                      style={{ '--fill-width': `${skill.pct}%`, animationDelay: `${i * 0.3}s` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-amber-500/10 border border-amber-500/25 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-0.5">Day 14</div>
                <div className="text-xs text-slate-400">Average day of first close for active students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
