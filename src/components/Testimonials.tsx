import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Remote Closer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'I went from struggling to find clients to closing $15K+ deals weekly. The Freedom Club network is unmatched. Real providers with real budgets.',
    earnings: '$47K in 90 days'
  },
  {
    name: 'Marcus Johnson',
    role: 'Certified High-Ticket Closer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'The daily training transformed my closing game. Within 3 weeks of certification, I had access to more qualified opportunities than I could handle.',
    earnings: '$62K in 4 months'
  },
  {
    name: 'Jessica Chen',
    role: 'Remote Sales Professional',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'Best decision I made this year. The certification gave me credibility, and the Freedom Club gave me opportunities. I closed my first $20K deal in week 2.',
    earnings: '$83K in 6 months'
  }
];

export function Testimonials() {
  return (
    <div className="py-24 bg-gradient-to-b from-slate-900/50 to-transparent relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text">
            Real Results From Real Closers
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join hundreds of successful closers who transformed their careers this year
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400 group-hover:fill-emerald-300 group-hover:text-emerald-300 transition-colors" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed italic group-hover:text-slate-200 transition-colors">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/30 group-hover:border-emerald-400/50 group-hover:shadow-lg group-hover:shadow-emerald-400/30 transition-all duration-300"
                />
                <div>
                  <div className="font-bold text-white group-hover:text-emerald-300 transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{testimonial.role}</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl p-4 group-hover:border-emerald-400/50 group-hover:shadow-lg group-hover:shadow-emerald-400/20 transition-all duration-300">
                <div className="text-sm text-emerald-300 font-semibold">Earnings</div>
                <div className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">{testimonial.earnings}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 border-2 border-slate-900 flex items-center justify-center text-white font-bold text-sm">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-bold">500+ Certified Closers</div>
              <div className="text-sm text-slate-400">Join the community earning together</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
