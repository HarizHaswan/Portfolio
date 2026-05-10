import { ProjectCard } from '../components/ui/ProjectCard';
import { PROJECTS } from '../data/constants';

const Projects = () => {
  return (
    <section className="py-24" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400">
            A selection of full-stack systems I've built, focusing on role-based access,
            real-time communication, and scalable database architectures.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}


      </div>
    </section>
  );
};

export default Projects;