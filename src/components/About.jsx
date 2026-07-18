import { profile } from '../data/profile'

function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="font-serif text-3xl font-semibold text-stone-900 dark:text-stone-100">
        About
      </h2>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_16rem]">
        <div className="space-y-4">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-stone-600 dark:text-stone-400">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="space-y-8 text-sm">
          <div>
            <h3 className="font-medium tracking-wide text-coffee-700 uppercase dark:text-coffee-300">
              Education
            </h3>
            <p className="mt-2 text-stone-800 dark:text-stone-200">{profile.education.degree}</p>
            <p className="text-stone-600 dark:text-stone-400">{profile.education.school}</p>
            <p className="text-stone-500">{profile.education.period}</p>
          </div>
          <div>
            <h3 className="font-medium tracking-wide text-coffee-700 uppercase dark:text-coffee-300">
              Languages
            </h3>
            <ul className="mt-2 space-y-1">
              {profile.languages.map((language) => (
                <li key={language.name}>
                  <span className="text-stone-800 dark:text-stone-200">{language.name}</span>
                  <span className="text-stone-500"> — {language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
