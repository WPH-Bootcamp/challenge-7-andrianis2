import { Navbar } from './components/layout';
import { Brands, Hero, Stats } from './components/sections';

function App() {
  return (
    <div className='bg-black text-white'>
      <header className='fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur'>
        <div className='max-w-7xl mx-auto px-6 py-5'>
          <Navbar />
        </div>
      </header>
      <Hero />
      <Brands />
      <Stats />
    </div>
  );
}

export default App;
