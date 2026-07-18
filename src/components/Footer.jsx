import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-sm text-zinc-500">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a
          href={`${profile.links.github}/keremcihansarac.github.io`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Source on GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
