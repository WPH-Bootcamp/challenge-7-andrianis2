import iconWeb from '../../assets/icons/Icon.png';
import iconMobile from '../../assets/icons/Icon-1.png';
import iconUI from '../../assets/icons/Icon-2.png';
import iconCloud from '../../assets/icons/Icon-3.png';
import iconSw from '../../assets/icons/Icon-4.png';
import iconIT from '../../assets/icons/Icon-5.png';
import iconQA from '../../assets/icons/Icon-6.png';
import iconCons from '../../assets/icons/Icon-7.png';
import iconCyber from '../../assets/icons/Icon-8.png';

const Services = () => {
  return (
    <section className='py-24 px-6' id='Services'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold'>
            Smart IT Solutions That Grow With You
          </h2>

          <p className='text-gray-400 mt-4'>
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconWeb} className='w-14 h-14 mb-5' />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>Web Development</h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Build fast, scalable, and SEO-friendly websites.
            </p>
          </div>

          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconMobile} />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>Mobile App</h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Native & cross-platform apps tailored to user needs.
            </p>
          </div>

          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconUI} />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>UI/UX Design</h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Delight users with intuitive and beautiful interfaces.
            </p>
          </div>

          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconCloud} />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>Cloud Solutions</h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Secure and flexible cloud infrastructure for your growth.
            </p>
          </div>

          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconSw} />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>Software Development</h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Custom solutions built around your business logic.
            </p>
          </div>

          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconIT} />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>IT Infrastructure</h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Scale your backend with reliable tech foundations.
            </p>
          </div>

          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconCyber} />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>
              Cybersecurity Services
            </h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Stay protected with enterprise-grade security.
            </p>
          </div>

          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconQA} />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>QA Solutions</h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Ensure performance with rigorous testing frameworks.
            </p>
          </div>

          <div className='bg-slate-900 border border-white/10 rounded-2xl p-6'>
            <div className='text-3xl'>
              <img src={iconCons} />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>
              IT Consulting & Support
            </h3>
            <p className='text-gray-400 mt-2 text-sm'>
              Make smarter tech decisions with expert guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
