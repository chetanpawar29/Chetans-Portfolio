import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="section-alt">
        <About />
      </div>
      <Experience />
      <div className="section-alt">
        <Skills />
      </div>
      <Projects />
      <div className="section-alt">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App