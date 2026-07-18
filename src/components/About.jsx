import { profile } from '../data/profile'

function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">About</h2>
      <div className="mt-4 space-y-4 max-w-2xl">
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="text-zinc-600 dark:text-zinc-400">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default About
