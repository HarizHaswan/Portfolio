const About = () => {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-neutral-900" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-blue-600 to-indigo-600 overflow-hidden shadow-2xl">
             {/* Replace with your actual photo */}
             <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-9xl">HH</div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-neutral-800 hidden md:block">
            <p className="text-3xl font-bold text-blue-600">3+</p>
            <p className="text-xs uppercase font-black tracking-tighter opacity-60">Major Systems Built</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold mb-8">Engineering with <br/><span className="text-blue-600">Purpose.</span></h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I am a <strong>Bachelor of Software Engineering</strong> student with a deep fascination for how complex systems interact. My journey started with simple web pages and evolved into building full-scale management systems like <strong>SmartKindy</strong>.
            </p>
            <p>
              I specialize in the <strong>MERN Stack</strong>, focusing on the bridge between high-performance backends and intuitive, accessible user interfaces. I believe that good software isn't just about code—it's about solving real-world friction for users.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-100 dark:bg-neutral-800/50 rounded-2xl">
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">Frontend</h5>
                <p className="text-xs">React, Tailwind, Radix</p>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-neutral-800/50 rounded-2xl">
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">Backend</h5>
                <p className="text-xs">Node, Express, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;