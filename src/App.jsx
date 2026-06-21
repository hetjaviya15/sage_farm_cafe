import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Dishes from './components/Dishes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import ReservationCTA from './components/ReservationCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Dishes />
        <Gallery />
        <Testimonials />
        <Instagram />
        <ReservationCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
