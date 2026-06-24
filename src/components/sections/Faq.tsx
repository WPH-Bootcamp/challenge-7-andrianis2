import faq from '../../assets/images/consultation.png?q=80&w=1200&auto=format&fit=crop';

const Faq = () => {
  return (
    <section className='py-24 px-6' id='FAQ'>
      <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16'>
        <div>
          <h2 className='text-4xl font-bold leading-tight'>
            Need Help? Start Here.
          </h2>

          <div className='mt-10 space-y-6'>
            <div className='border-b border-white/10 pb-4'>
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>What services do you offer?</h3>
                <span>+</span>
              </div>
            </div>

            <div className='border-b border-white/10 pb-4'>
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>
                  How do I know if this is right for my business?
                </h3>
                <span>+</span>
              </div>
            </div>

            <div className='border-b border-white/10 pb-4'>
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>How much does a project cost?</h3>
                <span>+</span>
              </div>
            </div>

            <div className='border-b border-white/10 pb-4'>
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>How long does it take?</h3>
                <span>+</span>
              </div>
            </div>

            <div className='border-b border-white/10 pb-4'>
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>
                  Can I start with a small project first?
                </h3>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-orange-500 rounded-3xl p-8 text-black'>
          <h3 className='text-3xl font-bold'>Let's talk it through.</h3>

          <p className='mt-4'>book a free consultation with our team.</p>

          <img src={faq} className='rounded-2xl mt-8' alt='' />

          <button className='mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold'>
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
