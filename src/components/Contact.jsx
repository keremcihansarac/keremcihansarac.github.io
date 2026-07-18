import { profile } from '../data/profile'

const contactLink =
  'text-stone-900 underline decoration-coffee-400 underline-offset-4 transition-colors hover:text-coffee-700 dark:text-stone-100 dark:decoration-coffee-500 dark:hover:text-coffee-300'

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="font-serif text-3xl font-semibold text-stone-900 dark:text-stone-100">
        Contact
      </h2>
      <p className="mt-4 max-w-xl text-stone-600 dark:text-stone-400">
        The best way to reach me is by email, or connect with me on LinkedIn.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a href={`mailto:${profile.links.email}`} className={contactLink}>
          {profile.links.email}
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={contactLink}>
          LinkedIn
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer" className={contactLink}>
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
