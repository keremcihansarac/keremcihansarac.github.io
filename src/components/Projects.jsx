import { profile } from '../data/profile'
import { featuredRepos } from '../data/projects'
import { useGithubRepos } from '../hooks/useGithubRepos'
import ProjectCard from './ProjectCard'

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
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Projects</h2>
      <p className="mt-2 text-sm text-zinc-500">
        Fetched live from my GitHub profile.
      </p>

      {loading && (
        <p className="mt-6 text-zinc-500" role="status">
          Loading projects…
        </p>
      )}

      {error && (
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
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
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {orderRepos(repos).map((repo) => (
            <ProjectCard key={repo.id} project={repo} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
