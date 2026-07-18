// Repo names to pin at the top of the GitHub projects list, in this order.
// Everything else follows, sorted by last update (the API's order).
export const featuredRepos = ['keremcihansarac.github.io']

// University / coursework projects that are not on GitHub.
export const schoolProjects = [
  {
    name: 'Pizza Delivery Web App',
    description:
      'End-to-end software engineering project: REST API with FastAPI and SQLAlchemy (Alembic migrations), linting with Ruff, SonarQube analysis, integration tests and CI/CD via GitLab pipelines, containerized with Docker and orchestrated on Kubernetes. Included customer interviews and gathering user acceptance criteria.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'Docker', 'Kubernetes', 'GitLab CI/CD'],
  },
  {
    name: 'Medical Dashboard',
    description:
      'Vite + React dashboard for general practitioners: user research and requirements analysis, interactive UX/UI prototyping, and structured visualization of clinical data to support medical decisions.',
    tech: ['React', 'Vite', 'UX Research', 'Data Visualization'],
  },
  {
    name: 'Object-Oriented Software Development',
    description:
      'Modular desktop applications in C++ with Qt: encapsulation, inheritance, pointer and memory management, file I/O with JSON, text and binary serialization, exception handling, and sorting/filtering with lambdas.',
    tech: ['C++', 'Qt'],
  },
  {
    name: 'Visual Computing',
    description:
      'Graphics programming and computer vision coursework with OpenGL and OpenCV, implemented in Python and C++.',
    tech: ['OpenGL', 'OpenCV', 'Python', 'C++'],
  },
  {
    name: 'Kindercampus (PSE)',
    description:
      'Interactive robotics learning platform teaching children digital skills — playful introduction to programming with Python and Scratch, organizing technical workshops, and mentoring in the project team.',
    tech: ['Python', 'Scratch', 'Mentoring'],
  },
]
