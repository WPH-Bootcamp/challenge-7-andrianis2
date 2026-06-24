import { Navbar, Footer } from './components/layout';
import {
  Brands,
  Build,
  Faq,
  Hero,
  Process,
  Projects,
  Services,
  Stats,
  Testimonials,
} from './components/sections';

function App() {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      <Hero />
      <Brands />
      <Stats />
      <Process />
      <Services />
      <Build />
      <Projects />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
