import build from '../../assets/images/build.png';

const Build = () => {
  return (
    <section className='py-24 px-6 bg-[#050505]'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <h2 className='text-4xl font-bold'>Built for Your Industry</h2>

          <p className='text-gray-400 mt-4'>
            We’ve helped companies across industries launch smarter, faster, and
            more securely
          </p>
        </div>
        <img src={build} alt='' className='w-auto' />
      </div>
    </section>
  );
};

export default Build;
