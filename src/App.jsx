import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
<Navbar/>
<Hero/>
<About/>
<Skills/>
<Project/>
<Contact/>
    </div>
  )
}

export default App
