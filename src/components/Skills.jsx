import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Skills</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
