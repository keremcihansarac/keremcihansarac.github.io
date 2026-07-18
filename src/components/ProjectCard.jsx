function ProjectCard({ project }) {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{project.name}</h3>
        <span className="shrink-0 text-sm text-zinc-500">★ {project.stargazers_count}</span>
      </div>
      <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        {project.language && (
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            {project.language}
          </span>
        )}
        {project.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {topic}
          </span>
        ))}
      </div>
    </a>
  )
}

export default ProjectCard
