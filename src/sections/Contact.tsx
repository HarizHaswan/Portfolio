import { ArrowRight, Github, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24" id="contact">
      <div className="bg-[#121212] dark:bg-[#121212] rounded-[3rem] p-12 lg:p-20 text-white flex flex-col items-center text-center shadow-2xl border border-neutral-800">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          Let's <span className="text-[#a855f7]">Connect</span>
        </h2>

        <p className="text-slate-400 text-lg mb-12 max-w-2xl leading-relaxed">
          Currently seeking full-stack internship or software tester opportunities
          starting August 2026 until December 2026. My inbox is always open for collaborations and
          inquiries.
        </p>

        <a
          href="mailto:muhdhariz237@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-slate-200 transition-colors mb-16"
        >
          Email me! <ArrowRight size={20} />
        </a>

        <div className="flex gap-4">
          <a href="https://github.com/HarizHaswan" className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors border border-white/10">
            <Github size={24} className="text-slate-300" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-hariz-bin-muhammadhaswan-840443287/" className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors border border-white/10">
            <Linkedin size={24} className="text-slate-300" />
          </a>
          <a href="mailto:muhdhariz237@gmail.com" className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors border border-white/10">
            <Mail size={24} className="text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;