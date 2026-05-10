import { SKILLS } from '../data/constants';
import { SkillBadge } from '../components/ui/SkillBadge';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section className="py-24" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(SKILLS).map(([category, items], idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-3xl"
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-6">{category}</h4>
            <div className="flex flex-wrap gap-3">
              {items.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;