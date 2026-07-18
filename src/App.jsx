import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = ['top', 'about', 'projects', 'skills', 'contact']

// Page background shifts as you scroll from section to section.
const sectionBackgrounds = {
  top: 'bg-paper dark:bg-night',
  about: 'bg-cream-2 dark:bg-night-2',
  projects: 'bg-cream-3 dark:bg-night-3',
  skills: 'bg-cream-2 dark:bg-night-2',
  contact: 'bg-paper dark:bg-night',
}

function App() {
  const activeSection = useActiveSection(sectionIds)

  return (
    <div
      className={`min-h-svh text-stone-800 antialiased transition-colors duration-700 dark:text-stone-300 ${sectionBackgrounds[activeSection]}`}
    >
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
