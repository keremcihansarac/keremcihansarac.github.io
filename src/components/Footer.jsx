import { profile } from '../data/profile'

const footerLink = 'transition-colors hover:text-coffee-700 dark:hover:text-coffee-300'

function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-sm text-stone-500">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={`mailto:${profile.links.email}`} className={footerLink}>
            {profile.links.email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={footerLink}
          >
            LinkedIn
          </a>
          <a
            href={`${profile.links.github}/keremcihansarac.github.io`}
            target="_blank"
            rel="noreferrer"
            className={footerLink}
          >
            Source on GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
