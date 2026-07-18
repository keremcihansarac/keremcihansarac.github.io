import { placeholderProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Projects</h2>
      <p className="mt-2 text-sm text-zinc-500">
        Static placeholders for now — live GitHub data comes next.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {placeholderProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
