import logo from '../../assets/images/logo-symbol.png';

const Footer = () => {
  return (
    <footer className='py-12 px-6'>
      <div className='max-w-7xl mx-auto bg-slate-950 border border-white/10 rounded-3xl p-10'>
        <div className='flex flex-col md:flex-row gap-10 justify-between items-start'>
          <div>
            <h2 className='text-3xl font-bold leading-tight'>
              LET'S DISCUSS
              <br />
              YOUR IDEA
            </h2>
          </div>

          <div>
            <div className='flex items-center gap-2 justify-end'>
              <img src={logo} alt='' className='h-8 w-auto' />
              <h1 className='font-bold'>Your Logo</h1>
            </div>

            <div className='flex gap-6 mt-10 text-gray-400 text-sm'>
              <a href='#About' className='hover:text-orange-300'>
                About
              </a>
              <a href='#Service' className='hover:text-orange-300'>
                Service
              </a>
              <a href='#Projects' className='hover:text-orange-300'>
                Projects
              </a>
              <a href='#Testimonials' className='hover:text-orange-300'>
                Testimonials
              </a>
              <a href='#FAQ' className='hover:text-orange-300'>
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
