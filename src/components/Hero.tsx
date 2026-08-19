import { Flame, Sparkles, TrendingUp, ArrowRight, Users, BookOpen, Clock, CheckCircle } from 'lucide-react';

const activityItems = [
  '🔥 Marcus J. just closed a $14,500 deal',
  '✅ Sarah K. earned her certification today',
  '📈 David R. hit $22K this month',
  '🎯 Priya M. received 3 new qualified leads',
  '🔥 Jake T. just closed a $9,800 deal',
  '✅ Keisha L. completed Day 7 of training',
  '📈 Tom W. made his first close in 11 days',
  '🎯 Ana S. matched with 5 Freedom Club providers',
];

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-transparent to-emerald-500/10" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-warm-pulse" />
      <div className="absolute top-40 right-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-cozy-breathe" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-warm-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-amber-400/8 rounded-full blur-2xl animate-cozy-breathe" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/40 rounded-full px-6 py-2.5 mb-8 backdrop-blur-sm animate-fade-in-down shadow-lg shadow-red-500/20 animate-warm-glow">
            <Flame className="w-5 h-5 text-red-400 animate-bounce-subtle" />
            <span className="text-red-300 font-bold tracking-wide">ONLY 47 SPOTS REMAINING. Enrollment Closes Soon</span>
            <Flame className="w-5 h-5 text-orange-400 animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Spots Are Filling Fast.
            <span className="block bg-gradient-to-r from-amber-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(245,158,11,0.25)]">
              Become a Certified High-Ticket Closer
            </span>
            <span className="block text-4xl md:text-5xl text-slate-300 font-semibold mt-2">
              Before This Cohort Is Gone
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            The only program with <span className="text-amber-400 font-bold">daily live training</span>. Fresh techniques every morning, real-time market insights, and qualified high-ticket opportunities delivered straight to you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {[
              { icon: CheckCircle, text: 'Daily live expert sessions' },
              { icon: CheckCircle, text: 'First close within 14 days' },
              { icon: CheckCircle, text: '$10K+ average deal size' },
              { icon: CheckCircle, text: '100% remote & flexible' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <item.icon className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-slate-300 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-amber-500/15 to-orange-500/10 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105 group animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <TrendingUp className="w-8 h-8 text-amber-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">$10K+</div>
              <div className="text-slate-400">Average Monthly Close Value</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/15 to-teal-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 group animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Users className="w-8 h-8 text-emerald-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">750+</div>
              <div className="text-slate-400">Verified High-Ticket Providers</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/15 to-cyan-500/10 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-6 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:scale-105 group animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <BookOpen className="w-8 h-8 text-teal-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">Daily</div>
              <div className="text-slate-400">Live Expert Training Sessions</div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-6 bg-gradient-to-br from-white/8 to-white/3 border border-white/15 rounded-2xl p-5 animate-float" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-recording-pulse" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Live Now</span>
              </div>
              <div className="h-px flex-1 bg-white/10" />
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-400">Session in progress</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left flex-1">
                <div className="text-white font-semibold text-sm">Advanced Objection Handling Mastery</div>
                <div className="text-xs text-slate-400 mt-0.5">Hosted by Senior Closer with 94 participants active</div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 bg-emerald-400 rounded-full animate-warm-pulse" style={{ height: `${[14, 22, 18, 26, 16][i]}px`, animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <a
            href="https://go.mediatraffics.com/intro-video"
            className="block w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:via-orange-400 hover:to-amber-500 text-white font-bold py-6 px-8 rounded-2xl transition-all transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/40 relative overflow-hidden group text-center animate-warm-glow"
          >
            <div className="absolute inset-0 animate-shimmer" />
            <span className="relative z-10 flex items-center justify-center gap-3 text-xl">
              Claim My Spot Before It's Gone
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="https://go.mediatraffics.com/intro-video"
            className="block w-full bg-white/8 hover:bg-white/12 text-white font-semibold py-4 px-8 rounded-2xl transition-all border border-white/20 hover:border-emerald-500/40 text-center"
          >
            <span className="flex items-center justify-center gap-2 text-base">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              Watch Free Intro. See the Daily Training in Action
            </span>
          </a>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-recording-pulse" />
            <p className="text-xs text-slate-400 text-center">
              <span className="text-amber-400 font-semibold">47 of 50 spots claimed.</span> New cohort starting soon
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="border-t border-b border-white/8 bg-white/3 py-3 relative">
            <div className="flex animate-ticker-scroll whitespace-nowrap">
              {[...activityItems, ...activityItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm text-slate-400 px-8">
                  {item}
                  <span className="text-white/20 mx-2">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </div>
  );
}
