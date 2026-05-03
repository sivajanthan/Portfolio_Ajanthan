import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProjects from './components/FeaturedProjects'
import AllProjects from './components/AllProjects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-darker">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <AllProjects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
