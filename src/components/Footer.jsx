import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-sm text-stone-500">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a
          href={`${profile.links.github}/keremcihansarac.github.io`}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-coffee-700 dark:hover:text-coffee-300"
        >
          Source on GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
