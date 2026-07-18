// Repo names to pin at the top of the Projects section once the
// GitHub API hook is in place. Order matters.
export const featuredRepos = ['keremcihansarac.github.io']

// Static placeholder cards used until the live GitHub fetch is wired up.
// Shape mirrors what the GitHub REST API returns for a repo.
export const placeholderProjects = [
  {
    id: 1,
    name: 'keremcihansarac.github.io',
    description: 'This portfolio website — built with Vite, React and Tailwind CSS.',
    language: 'JavaScript',
    stargazers_count: 0,
    topics: ['react', 'vite', 'tailwindcss'],
    html_url: 'https://github.com/keremcihansarac/keremcihansarac.github.io',
  },
  {
    id: 2,
    name: 'sample-project',
    description: 'Placeholder card — will be replaced by live data from the GitHub API.',
    language: 'Python',
    stargazers_count: 3,
    topics: ['placeholder'],
    html_url: 'https://github.com/keremcihansarac',
  },
  {
    id: 3,
    name: 'another-project',
    description: 'Placeholder card — will be replaced by live data from the GitHub API.',
    language: 'Java',
    stargazers_count: 1,
    topics: ['placeholder'],
    html_url: 'https://github.com/keremcihansarac',
  },
]
