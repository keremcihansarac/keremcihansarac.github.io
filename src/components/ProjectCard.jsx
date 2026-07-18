function ProjectCard({ project }) {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col rounded-lg border border-stone-200 p-5 transition-colors hover:border-coffee-400 dark:border-stone-800 dark:hover:border-coffee-500"
    >
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
          {project.name}
        </h3>
        <span className="shrink-0 text-sm text-stone-500">★ {project.stargazers_count}</span>
      </div>
      <p className="mt-2 flex-1 text-sm text-stone-600 dark:text-stone-400">
        {project.description ?? 'No description yet.'}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        {project.language && (
          <span className="font-medium text-coffee-700 dark:text-coffee-300">
            {project.language}
          </span>
        )}
        {(project.topics ?? []).map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-coffee-100 px-2.5 py-0.5 text-coffee-800 dark:bg-coffee-900 dark:text-coffee-200"
          >
            {topic}
          </span>
        ))}
      </div>
    </a>
  )
}

export default ProjectCard
