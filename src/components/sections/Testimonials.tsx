import testi from '../../assets/images/testimonials.png';

const Testimonials = () => {
  return (
    <section className='py-24 px-6 bg-[#050505]' id='Testimonials'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold'>
            What Partners Say About Working With Us
          </h2>

          <p className='text-gray-400 mt-4'>
            Trusted voices. Real experiences. Proven results.
          </p>
          <img src={testi} alt='' className='w-auto' />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
