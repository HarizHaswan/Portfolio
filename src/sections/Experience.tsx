import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/constants';

const Experience = () => {
  return (
    <section className="py-24" id="experience">
      <div>
        <h2 className="text-4xl font-extrabold mb-16">Experience</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-3 md:before:ml-[19px] before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-neutral-800">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-3 md:left-[19px] top-10 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_0_4px_rgba(37,99,235,0.2)] -translate-x-1/2"></div>
              
              <div className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-neutral-800/50 px-4 py-2 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-4">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                      <span className="mr-4 text-blue-500 font-black mt-0.5">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
