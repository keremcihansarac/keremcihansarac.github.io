import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <SectionHeading number="03" title="Skills" />
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
                  className="rounded-full border border-stone-200 px-3 py-1 text-sm text-stone-700 transition-colors hover:border-coffee-400 hover:bg-coffee-100/60 dark:border-stone-700 dark:text-stone-300 dark:hover:border-coffee-500 dark:hover:bg-coffee-900/40"
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
