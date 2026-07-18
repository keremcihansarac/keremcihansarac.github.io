import { profile } from '../data/profile'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const linkStyle =
  'relative text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 ' +
  'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-coffee-600 after:transition-[width] after:duration-300 hover:after:w-full dark:after:bg-coffee-300'

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-paper/80 backdrop-blur dark:border-stone-800 dark:bg-night/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-wide text-stone-900 dark:text-stone-100"
        >
          {profile.name}
        </a>
        <ul className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkStyle}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
