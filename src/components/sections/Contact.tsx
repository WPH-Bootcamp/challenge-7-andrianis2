const Contact = () => {
  return (
    <section className='py-24 px-6 bg-[#050505]'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-bold'>Ready to Start? Let's Talk.</h2>

        <p className='text-gray-400 mt-4'>
          Tell us what you need and we'll get back to you soon.
        </p>

        <form className='mt-12 space-y-6 text-left'>
          <div>
            <label className='text-sm text-gray-400'>Name</label>
            <input
              type='text'
              className='w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3'
              placeholder='Enter your name'
            />
          </div>

          <div>
            <label className='text-sm text-gray-400'>Email</label>
            <input
              type='email'
              className='w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <label className='text-sm text-gray-400'>Message</label>
            <textarea
              rows='5'
              className='w-full mt-2 bg-transparent border border-white/10 rounded-xl px-4 py-3'
              placeholder='Write your message'
            ></textarea>
          </div>

          <button className='w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-full font-semibold'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
