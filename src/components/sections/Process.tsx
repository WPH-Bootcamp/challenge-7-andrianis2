import { steps } from '../../data/steps';

const Process = () => {
  return (
    <section className='bg-black py-20'>
      <div class='max-w-5xl mx-auto text-center'>
        <h2 class='text-4xl font-bold'>Our Process</h2>
        <p class='text-gray-400 mt-4 mb-20'>
          Clear steps. Smart execution. Powerful results.
        </p>
      </div>
      <div className='max-w-6xl mx-auto relative'>
        {/* Garis Tengah */}
        <div className='absolute left-1/2 top-0 h-full w-[2px] bg-zinc-800 -translate-x-1/2' />

        <div className='space-y-12'>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Card */}
              <div className='w-[45%] bg-[#0B1220] rounded-2xl p-6 border border-zinc-800 shadow-lg'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h3 className='text-white font-semibold text-lg'>
                      {step.title}
                    </h3>

                    <p className='text-zinc-400 mt-2 text-sm'>
                      {step.description}
                    </p>
                  </div>

                  <button className='text-white text-xl'>^</button>
                </div>
              </div>

              {/* Number */}
              <div className='absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold z-10'>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
