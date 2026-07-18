import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="min-h-svh bg-paper text-stone-800 antialiased dark:bg-night dark:text-stone-300">
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
      </main>
      <Footer />
    </div>
  )
}

export default App
