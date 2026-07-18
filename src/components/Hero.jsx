import { profile } from '../data/profile'
import Reveal from './Reveal'

// Abstract decorative figure — swap for a photo or illustration later.
function HeroFigure() {
  return (
    <svg viewBox="0 0 320 320" className="h-64 w-64 lg:h-80 lg:w-80" aria-hidden="true">
      <circle
        cx="160"
        cy="160"
        r="132"
        strokeWidth="1.5"
        className="fill-none stroke-coffee-300 dark:stroke-coffee-700"
      />
      <circle cx="205" cy="115" r="58" className="fill-coffee-200/80 dark:fill-coffee-800/70" />
      <path
        d="M 44 196 A 118 118 0 0 0 214 270"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="fill-none stroke-coffee-600 dark:stroke-coffee-400"
      />
      <path
        d="M 84 84 A 104 104 0 0 1 244 96"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="fill-none stroke-coffee-400 dark:stroke-coffee-500"
      />
      <circle cx="118" cy="208" r="7" className="fill-stone-900 dark:fill-stone-100" />
    </svg>
  )
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-8 h-px w-14 bg-coffee-600 dark:bg-coffee-300" />
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-6xl dark:text-stone-100">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg text-coffee-700 dark:text-coffee-300">{profile.title}</p>
            <p className="mt-4 max-w-xl text-stone-600 dark:text-stone-400">{profile.tagline}</p>
            <div className="mt-9 flex flex-wrap gap-4 text-sm">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-stone-900 px-6 py-2.5 font-medium text-paper transition-colors hover:bg-coffee-800 dark:bg-stone-100 dark:text-night dark:hover:bg-coffee-200"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-stone-300 px-6 py-2.5 font-medium text-stone-700 transition-colors hover:border-coffee-600 hover:text-coffee-700 dark:border-stone-700 dark:text-stone-300 dark:hover:border-coffee-300 dark:hover:text-coffee-300"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.links.email}`}
                className="rounded-full border border-stone-300 px-6 py-2.5 font-medium text-stone-700 transition-colors hover:border-coffee-600 hover:text-coffee-700 dark:border-stone-700 dark:text-stone-300 dark:hover:border-coffee-300 dark:hover:text-coffee-300"
              >
                Email
              </a>
            </div>
          </div>
          <div className="hidden shrink-0 md:block">
            <HeroFigure />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Hero
