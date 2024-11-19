
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
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
        </main>
      </>
  )
}

export default App
