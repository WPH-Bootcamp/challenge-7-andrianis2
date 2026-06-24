import company from '../../assets/images/company.png';

const Brands = () => {
  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <p className='text-gray-400 mb-8'>
          Trusted by Global Innovators & Leading Brands
        </p>
        <img src={company} alt='' className='w-auto' />
        <div className='grid grid-cols-2 md:grid-cols-6 gap-8 text-gray-500 text-lg font-semibold'></div>
      </div>
    </section>
  );
};

export default Brands;
