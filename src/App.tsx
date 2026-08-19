import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { FreedomClub } from './components/FreedomClub';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <Hero />
        <Benefits />
        <HowItWorks />
        <FreedomClub />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
        <OfflineIndicator />
      </div>
    </ErrorBoundary>
  );
}
