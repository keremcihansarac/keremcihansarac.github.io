import { profile } from '../data/profile'
import { featuredRepos, schoolProjects } from '../data/projects'
import { useGithubRepos } from '../hooks/useGithubRepos'
import ProjectCard from './ProjectCard'
import SchoolProjectCard from './SchoolProjectCard'
import SectionHeading from './SectionHeading'

// Featured repos first (in featuredRepos order), then the rest; forks are hidden.
function orderRepos(repos) {
  const own = repos.filter((repo) => !repo.fork)
  const featured = featuredRepos
    .map((name) => own.find((repo) => repo.name === name))
    .filter(Boolean)
  const rest = own.filter((repo) => !featuredRepos.includes(repo.name))
  return [...featured, ...rest]
}

function Projects() {
  const { repos, error, loading } = useGithubRepos(profile.githubUsername)

  return (
    <section id="projects" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <SectionHeading number="02" title="Projects" />

      <h3 className="mt-8 text-sm font-medium tracking-wide text-coffee-700 uppercase dark:text-coffee-300">
        University coursework
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {schoolProjects.map((project) => (
          <SchoolProjectCard key={project.name} project={project} />
        ))}
      </div>

      <h3 className="mt-12 text-sm font-medium tracking-wide text-coffee-700 uppercase dark:text-coffee-300">
        On GitHub
      </h3>
      <p className="mt-1 text-sm text-stone-500">Fetched live from my GitHub profile.</p>

      {loading && (
        <p className="mt-4 text-stone-500" role="status">
          Loading projects…
        </p>
      )}

      {error && (
        <p className="mt-4 text-stone-600 dark:text-stone-400">
          Couldn’t load projects right now — you can browse them directly on{' '}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            my GitHub profile
          </a>
          .
        </p>
      )}

      {repos && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {orderRepos(repos).map((repo) => (
            <ProjectCard key={repo.id} project={repo} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
