import portofolio1 from '../../assets/images/portfolio1.png?q=80&w=1200&auto=format&fit=crop';
import portofolio2 from '../../assets/images/portfolio2.png?q=80&w=1200&auto=format&fit=crop';
import portofolio3 from '../../assets/images/portfolio3.png?q=80&w=1200&auto=format&fit=crop';

const Projects = () => {
  return (
    <section className='py-24 px-6 bg-[#050505]' id='Projects'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold'>
            From Vision to Launch! Projects We're Proud Of
          </h2>

          <p className='text-gray-400 mt-4'>
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <img src={portofolio1} className='rounded-2xl' alt='' />
          </div>

          <div>
            <img src={portofolio2} className='rounded-2xl' alt='' />
          </div>

          <div>
            <img src={portofolio3} className='rounded-2xl' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
