import hero from '../../assets/images/hero.png';

const Hero = () => {
  return (
    <section className='pt-36 pb-24 px-6'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center'>
        <div>
          <h1 className='text-5xl lg:text-6xl font-bold leading-tight'>
            Your Tech Partner for
            <span className='text-orange-500'> Smarter Growth</span>
          </h1>

          <p className='text-gray-400 mt-6 max-w-xl leading-relaxed'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <button className='mt-8 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold'>
            Let's Talk
          </button>
        </div>

        <div className='flex justify-center'>
          <img
            src={hero}
            className='rounded-3xl shadow-2xl shadow-orange-500/20'
            alt='hero'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
