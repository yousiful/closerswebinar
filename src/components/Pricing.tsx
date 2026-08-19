import { Check, Gift, Clock, Shield, Lock, Award, ArrowRight, Flame, Users, BookOpen, Star } from 'lucide-react';

const TOTAL_SPOTS = 50;
const CLAIMED_SPOTS = 47;
const FILL_PERCENT = Math.round((CLAIMED_SPOTS / TOTAL_SPOTS) * 100);

export function Pricing() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-warm-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-cozy-breathe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-full px-6 py-2.5 mb-6 animate-bounce-subtle shadow-lg shadow-red-500/20 animate-warm-glow">
            <Flame className="w-5 h-5 text-red-400 animate-bounce-subtle" />
            <span className="text-red-300 font-bold">ENROLLMENT CLOSING SOON. Only 3 Spots Remain</span>
            <Flame className="w-5 h-5 text-orange-400 animate-bounce-subtle" style={{ animationDelay: '0.3s' }} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Watch Another Cohort Fill Without You
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            This is your window. The next cohort starts in days and the training seats are almost gone. Permanently.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/15 hover:shadow-amber-500/25 hover:border-amber-500/60 transition-all duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="bg-gradient-to-r from-amber-500/25 to-orange-500/20 p-5 text-center border-b border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer" />
              <div className="flex items-center justify-center gap-3 relative z-10">
                <Clock className="w-5 h-5 text-amber-400 animate-recording-pulse" />
                <span className="text-amber-200 font-bold text-lg">Early Enrollment Special. Cohort Starting Soon</span>
              </div>
            </div>

            <div className="px-8 md:px-12 pt-8 pb-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-400" />
                    <span className="text-white font-bold">Enrollment Meter</span>
                  </div>
                  <div className="text-right">
                    <span className="text-red-400 font-bold text-xl">{CLAIMED_SPOTS}</span>
                    <span className="text-slate-400 text-sm">/{TOTAL_SPOTS} spots claimed</span>
                  </div>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 via-red-500 to-red-600 rounded-full animate-progress-fill"
                    style={{ '--fill-width': `${FILL_PERCENT}%` } as React.CSSProperties}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-slate-400">0 spots</span>
                  <span className="text-xs text-red-400 font-semibold">{TOTAL_SPOTS - CLAIMED_SPOTS} spots remaining</span>
                  <span className="text-xs text-slate-400">{TOTAL_SPOTS} spots</span>
                </div>
              </div>

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-2">The Complete High-Ticket Closer Package</h3>
                <p className="text-slate-400">Investment details provided upon qualification. No commitment to apply</p>

                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-slate-300 text-sm">Rated 4.9/5 by 500+ graduates</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold text-amber-300 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Daily Training & Certification
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { text: 'Daily live training every weekday morning', hot: true },
                      { text: 'Real call breakdowns with senior closers', hot: true },
                      { text: 'Live objection-handling drills', hot: true },
                      { text: 'Expert closer mentorship', hot: false },
                      { text: 'Professional certification (live eval)', hot: false },
                      { text: 'Proven closing frameworks & scripts', hot: false },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.hot ? 'text-amber-400' : 'text-emerald-400'}`} />
                        <span className={item.hot ? 'text-white font-medium' : ''}>{item.text}</span>
                        {item.hot && <span className="text-xs text-amber-400 bg-amber-500/15 border border-amber-500/30 rounded-full px-2 py-0.5 ml-auto flex-shrink-0">Daily</span>}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Freedom Club & Opportunities
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { text: 'Freedom Club access with 750+ providers', hot: false },
                      { text: 'Daily qualified opportunities delivered', hot: true },
                      { text: '$10K–$50K high-ticket deal flow', hot: false },
                      { text: 'Pre-vetted, active service providers only', hot: false },
                      { text: '48-hour placement after certification', hot: true },
                      { text: 'Ongoing network for your entire career', hot: false },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.hot ? 'text-amber-400' : 'text-emerald-400'}`} />
                        <span className={item.hot ? 'text-white font-medium' : ''}>{item.text}</span>
                        {item.hot && <span className="text-xs text-amber-400 bg-amber-500/15 border border-amber-500/30 rounded-full px-2 py-0.5 ml-auto flex-shrink-0">Hot</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-7 mb-10">
                <div className="flex items-center gap-2 mb-5">
                  <Gift className="w-5 h-5 text-emerald-400 animate-bounce-subtle" />
                  <h4 className="font-bold text-white text-lg">Enrollment Bonuses for This Cohort Only</h4>
                  <span className="ml-auto text-xs text-red-400 bg-red-500/15 border border-red-500/25 rounded-full px-3 py-1 font-semibold">
                    Expires When Spots Fill
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    { icon: Gift, color: 'text-amber-400 bg-amber-500/15', title: 'Priority Placement', body: 'Jump the waitlist and get first access to the newest provider opportunities' },
                    { icon: Gift, color: 'text-emerald-400 bg-emerald-500/15', title: '1-on-1 Strategy Call', body: '60-minute personal roadmap session with a senior closer before you start' },
                    { icon: Gift, color: 'text-teal-400 bg-teal-500/15', title: 'Battle-Tested Script Vault', body: 'Over 40 proven closing scripts refined across thousands of real calls' },
                  ].map((bonus, i) => (
                    <div key={i} className="flex flex-col items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bonus.color}`}>
                        <bonus.icon className={`w-5 h-5 ${bonus.color.split(' ')[0]}`} />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm mb-1">{bonus.title}</div>
                        <div className="text-xs text-slate-400 leading-relaxed">{bonus.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <a
                  href="https://go.mediatraffics.com/intro-video"
                  className="block w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:via-orange-400 hover:to-amber-500 text-white font-bold py-6 px-8 rounded-2xl transition-all transform hover:scale-[1.02] hover:shadow-2xl shadow-xl shadow-amber-500/40 relative overflow-hidden group text-center animate-warm-glow"
                >
                  <div className="absolute inset-0 animate-shimmer" />
                  <span className="relative z-10 flex items-center justify-center gap-3 text-xl">
                    Claim One of the Last 3 Spots and Apply Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <a
                  href="https://go.mediatraffics.com/intro-video"
                  className="block w-full bg-white/8 hover:bg-white/12 text-white font-semibold py-4 px-8 rounded-2xl transition-all border border-white/15 hover:border-emerald-500/40 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    Watch the Free Intro. See a Live Training Session First
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs">30-Day Guarantee</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex items-center gap-2 text-slate-400">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs">Privacy Protected</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex items-center gap-2 text-slate-400">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs">Verified Program</span>
                </div>
              </div>

              <p className="text-center text-slate-500 text-xs mt-5">
                No commitment required to apply. Investment details are shared privately after a brief qualification call.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">30-Day Money-Back</div>
                  <div className="text-xs text-slate-400">Full satisfaction guarantee</div>
                </div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">Certified Training</div>
                  <div className="text-xs text-slate-400">Industry-recognized credential</div>
                </div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">500+ Graduates</div>
                  <div className="text-xs text-slate-400">Earning commissions right now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
