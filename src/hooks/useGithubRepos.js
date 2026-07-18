import { useEffect, useState } from 'react'

// Module-level cache: survives component remounts without refetching.
// Unauthenticated GitHub API calls are limited to ~60/hour per IP,
// so we fetch at most once per page load.
let cachedRepos = null

export function useGithubRepos(username) {
  const [repos, setRepos] = useState(cachedRepos)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (cachedRepos) return

    let cancelled = false

    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        )
        if (!response.ok) {
          throw new Error(`GitHub API responded with status ${response.status}`)
        }
        const data = await response.json()
        if (cancelled) return
        cachedRepos = data
        setRepos(data)
      } catch (err) {
        if (!cancelled) setError(err)
      }
    }

    fetchRepos()
    // Ignore the response if the component unmounts mid-request
    // (also avoids double-setting state under React StrictMode).
    return () => {
      cancelled = true
    }
  }, [username])

  return { repos, error, loading: repos === null && error === null }
}
