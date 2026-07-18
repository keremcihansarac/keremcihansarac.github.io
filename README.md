# keremcihansarac.github.io

Personal portfolio website of **Kerem Cihan Saraç** — computer science (Informatik)
student in Germany. Live at [keremcihansarac.github.io](https://keremcihansarac.github.io).

## Tech

- [Vite](https://vite.dev/) + [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- Projects section is fetched live from the public GitHub REST API (no token needed)
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

## Development

```bash
npm install
npm run dev       # local dev server
npm run lint      # ESLint
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  components/   # Navbar, Hero, About, Projects, ProjectCard, Skills, Contact, Footer
  data/         # page content: profile info, skills, featured repos
  hooks/        # useGithubRepos (GitHub API fetch + in-memory cache)
```

All page text lives in `src/data/` — content edits never touch components.

## License

[MIT](LICENSE)
