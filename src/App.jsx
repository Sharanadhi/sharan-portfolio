
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.scss'

function App() {
  return (
      <>
        <header>
          <Navbar/>          
          <Hero />
        </header>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </>
  )
}

export default App
