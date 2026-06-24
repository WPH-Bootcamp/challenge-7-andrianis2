import { useState } from 'react';
import { faqs } from '../../data/faqs';
import faq from '../../assets/images/consultation.png?q=80&w=1200&auto=format&fit=crop';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-24 px-6' id='FAQ'>
      <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16'>
        <div>
          <h2 className='text-4xl font-bold leading-tight'>
            Need Help? Start Here.
          </h2>

          <div className='mt-10 space-y-6'>
            <div className='space-y-4'>
              {faqs.map((faq, index) => (
                <div key={index} className='border-b border-zinc-800 pb-5'>
                  <button
                    onClick={() => toggleFaq(index)}
                    className='w-full flex justify-between items-center text-left'
                  >
                    <h3 className='text-white text-2xl font-semibold'>
                      {faq.question}
                    </h3>

                    <span className='text-white text-3xl'>
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  {openIndex === index && (
                    <p className='text-zinc-400 mt-5 text-lg leading-8'>
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
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
