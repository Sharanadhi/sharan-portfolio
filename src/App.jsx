
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
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
        </main>
      </>
  )
}

export default App
