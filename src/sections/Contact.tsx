const Contact = () => {
  return (
    <section className="py-24" id="contact">
      <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        
        <div className="max-w-3xl relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's build something impactful.</h2>
          <p className="text-blue-100 text-lg mb-10">
            Currently seeking an internship from **August — December 2026**. 
            If you're looking for a developer who breathes the MERN stack, let's talk.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <span className="block text-blue-200 text-sm mb-1">Email Me</span>
              <a href="mailto:harizhaswan@example.com" className="text-xl font-bold hover:underline">harizhaswan@email.com</a>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <span className="block text-blue-200 text-sm mb-1">LinkedIn</span>
              <a href="#" className="text-xl font-bold hover:underline">in/harizhaswan</a>
            </div>
          </div>

          <form className="space-y-4 max-w-md opacity-50 cursor-not-allowed">
             <input disabled type="text" placeholder="Name" className="w-full p-4 bg-white/10 rounded-xl border border-white/20 outline-none" />
             <textarea disabled placeholder="Message" className="w-full p-4 bg-white/10 rounded-xl border border-white/20 outline-none h-32" />
             <button disabled className="w-full py-4 bg-white text-blue-600 font-bold rounded-xl">Send Message (UI Only)</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;