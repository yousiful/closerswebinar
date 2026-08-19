import { useState } from 'react';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need prior sales experience to join?',
    urgent: true,
    answer: 'Zero experience required. That is actually your advantage. Our daily live training builds you from the ground up with no bad habits to unlearn. Over 60% of our top-earning graduates came from completely unrelated fields like nursing, retail, and teaching. The daily training is designed to take someone from beginner to confident, certified closer inside two weeks.',
  },
  {
    question: 'How fast can I realistically make my first close?',
    urgent: true,
    answer: 'Our graduates average their first close on Day 14. Some hit it as early as Day 8, right after certification. This is possible because you\'re not waiting on cold outreach. Freedom Club providers have live inbound leads waiting for certified closers the moment you qualify. The daily training means your skills are sharp the day you step in.',
  },
  {
    question: 'What makes the daily training different from a course?',
    urgent: true,
    answer: 'A recorded course teaches you what worked last year. Our daily live sessions teach you what\'s working today in this market, against current objections, with real buyers. Every morning, an elite closer dissects live call recordings, role-plays new scenarios, and coaches you in real time. It\'s the difference between watching someone swim and actually getting in the water with a world-class coach.',
  },
  {
    question: 'What is the Freedom Club and why does it matter?',
    urgent: false,
    answer: 'The Freedom Club is our invitation-only network of 750+ premium service providers who are actively spending on paid advertising to generate inbound leads. They need certified closers right now to handle this demand. As a certified member, you get daily access to this pipeline, matching you with businesses based on your niche preferences. No prospecting, no cold calls. Real opportunities, immediate income.',
  },
  {
    question: 'How much can I realistically earn, honestly?',
    urgent: false,
    answer: 'Within 90 days, our active graduates typically earn $5K to $15K per month in commission. Top performers who layer multiple providers simultaneously earn $20K to $40K or more monthly. Your income is directly proportional to your training consistency and deal volume, which is exactly why daily training is non-negotiable. Part-time closers still routinely earn $3K to $6K monthly as a supplemental income.',
  },
  {
    question: 'Is this 100% remote and location-independent?',
    urgent: false,
    answer: 'Completely. All training, certification, and closing happens online via video calls. You can run your closing business from your kitchen table, a coffee shop, or a beach. The only requirement is a reliable internet connection and the drive to show up for daily training consistently.',
  },
  {
    question: 'How does the certification process work?',
    urgent: false,
    answer: 'After your first week of daily training, you enter a live performance evaluation. Not a written test but an actual simulated closing call with a senior closer playing the role of a real buyer. If you demonstrate the core frameworks and respond to objections effectively, you pass and receive immediate Freedom Club access. Most students pass on their first attempt after consistent daily training.',
  },
  {
    question: 'Why is enrollment limited to 50 spots?',
    urgent: true,
    answer: 'Quality is everything. We cap each cohort at 50 students to ensure every person gets personal feedback during daily training sessions, access to sufficient Freedom Club opportunities, and direct mentor time. When 50 closers graduate and enter the Freedom Club simultaneously, providers still have enough pipeline for everyone. More than 50 would dilute the opportunity density and our results would suffer. This is why spots are genuinely scarce and fill extremely fast.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-5 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-slate-400" />
            <span className="text-slate-300 font-semibold text-sm">Straight Answers. No Fluff</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You're Wondering
          </h2>
          <p className="text-xl text-slate-300">
            Real answers to the questions that matter most before you apply
          </p>
        </div>

        <div className="space-y-3 mb-14">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'bg-white/8 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                  : 'bg-white/4 border-white/10 hover:border-emerald-500/25 hover:bg-white/6'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-5 flex items-center justify-between text-left gap-4"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {faq.urgent && (
                    <span className="hidden sm:block text-xs text-amber-400 bg-amber-500/15 border border-amber-500/25 rounded-full px-2 py-0.5 font-semibold flex-shrink-0">
                      Common
                    </span>
                  )}
                  <span className="text-base font-semibold text-white">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-6 border-t border-white/8 pt-4">
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-500/12 to-emerald-500/12 border border-amber-500/25 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Still Have Questions?</h3>
          <p className="text-slate-300 mb-5 text-sm max-w-lg mx-auto">
            Watch the free intro video. It covers the most common questions in detail, including what a real training session looks like.
          </p>
          <a
            href="https://go.mediatraffics.com/intro-video"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 px-7 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25"
          >
            Watch the Free Intro Now
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-slate-500 mt-4">Only 3 spots remaining. Do not wait</p>
        </div>
      </div>
    </div>
  );
}
