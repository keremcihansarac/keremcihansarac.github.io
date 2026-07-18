import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Contact</h2>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        The best way to reach me is by email, or connect with me on LinkedIn.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          href={`mailto:${profile.links.email}`}
          className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
        >
          {profile.links.email}
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
        >
          LinkedIn
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
