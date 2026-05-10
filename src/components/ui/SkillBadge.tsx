import { motion } from 'framer-motion';

export const SkillBadge = ({ name }: { name: string }) => (
  <motion.span 
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
    className="px-4 py-2 bg-slate-100 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-xl text-sm font-medium transition-colors"
  >
    {name}
  </motion.span>
);