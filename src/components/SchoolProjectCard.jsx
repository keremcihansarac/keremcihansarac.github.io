function SchoolProjectCard({ project }) {
  return (
    <div className="flex flex-col rounded-lg border border-stone-200 p-5 transition-colors hover:border-coffee-400 dark:border-stone-800 dark:hover:border-coffee-500">
      <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-stone-600 dark:text-stone-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-coffee-100 px-2.5 py-0.5 text-coffee-800 dark:bg-coffee-900 dark:text-coffee-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SchoolProjectCard
