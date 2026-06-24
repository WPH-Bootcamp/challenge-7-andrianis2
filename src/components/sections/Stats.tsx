const Stats = () => {
  return (
    <section className='py-24 px-6'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-4xl font-bold'>
          End-to-End IT Solutions That Drive Results
        </h2>

        <p className='text-gray-400 mt-4'>
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 justify-items-center'>
          <div className='w-40 h-40 rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center'>
            <h3 className='text-4xl font-bold text-orange-500'>50+</h3>
            <p className='text-gray-300 mt-2 text-sm'>Projects Delivered</p>
          </div>

          <div className='w-40 h-40 rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center'>
            <h3 className='text-4xl font-bold text-orange-500'>5+</h3>
            <p className='text-gray-300 mt-2 text-sm'>Years of Experience</p>
          </div>

          <div className='w-40 h-40 rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center'>
            <h3 className='text-4xl font-bold text-orange-500'>10+</h3>
            <p className='text-gray-300 mt-2 text-sm'>Industry Awards Won</p>
          </div>

          <div className='w-40 h-40 rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center'>
            <h3 className='text-4xl font-bold text-orange-500'>100%</h3>
            <p className='text-gray-300 mt-2 text-sm'>
              Client Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
