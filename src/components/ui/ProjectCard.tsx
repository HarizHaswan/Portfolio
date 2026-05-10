import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../../data/constants';

interface ProjectProps {
  project: typeof PROJECTS[0];
}

export const ProjectCard = ({ project }: ProjectProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
  >
    <div className="aspect-video bg-gradient-to-br from-blue-600/10 to-indigo-600/10 overflow-hidden relative">
      {project.image ? (
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-4xl font-bold tracking-tighter opacity-20 group-hover:opacity-40 transition-opacity flex items-center justify-center w-full h-full"
        >
          {project.title}
        </motion.div>
      )}
    </div>
    
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{project.subtitle}</p>
        </div>
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 text-sm leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.slice(0, 4).map((t: string) => (
          <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-100 dark:bg-neutral-800 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 bg-neutral-950 dark:bg-white dark:text-black text-white rounded-xl text-sm font-bold hover:opacity-90 transition-opacity">
          <Github size={16} /> Code
        </a>
        <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-neutral-800 rounded-xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-neutral-800 transition-all">
          <ExternalLink size={16} /> Demo
        </a>
      </div>
    </div>
  </motion.div>
);