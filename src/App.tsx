import { Hero } from './components/Hero';
import { Pain } from './components/Pain';
import { Authority } from './components/Authority';
import { TargetAudience } from './components/TargetAudience';
import { CourseContent } from './components/CourseContent';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Anchoring } from './components/Anchoring';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <main className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white">
      <Hero />
      <Pain />
      <Authority />
      <TargetAudience />
      <CourseContent />
      <HowItWorks />
      <Pricing />
      <Anchoring />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

export default App;