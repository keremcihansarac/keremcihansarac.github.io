import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="font-serif text-3xl font-semibold text-stone-900 dark:text-stone-100">
        Skills
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium tracking-wide text-coffee-700 uppercase dark:text-coffee-300">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-stone-200 px-3 py-1 text-sm text-stone-700 dark:border-stone-700 dark:text-stone-300"
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
