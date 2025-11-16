import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ConsultationSection from './components/ConsultationSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Hero />
      <Philosophy />
      <ConsultationSection />
      <Services />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
