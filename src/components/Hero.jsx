import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-zinc-700 dark:text-zinc-300">{profile.title}</p>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">{profile.tagline}</p>
      <div className="mt-8 flex gap-4 text-sm">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-zinc-300 px-4 py-2 font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.links.email}`}
          className="rounded-md border border-zinc-300 px-4 py-2 font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Email
        </a>
      </div>
    </section>
  )
}

export default Hero
