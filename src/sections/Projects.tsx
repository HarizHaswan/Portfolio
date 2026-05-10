const ProjectCard = ({ project }: { project: any }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-xl"
        >
            <div className="h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative">
                {/* Project Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-bold">SmartKindy</span>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-neutral-800 rounded-md text-xs font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={project.github} className="flex-1 text-center py-2 bg-neutral-900 dark:bg-white dark:text-black text-white rounded-lg text-sm font-bold">
                        GitHub
                    </a>
                    <a href={project.demo} className="flex-1 text-center py-2 border border-slate-200 dark:border-neutral-800 rounded-lg text-sm font-bold">
                        Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};