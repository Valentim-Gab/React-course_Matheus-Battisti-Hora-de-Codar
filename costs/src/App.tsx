import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home.tsx'
import { Projects } from './components/pages/Projects.tsx'
import { Company } from './components/pages/Company.tsx'
import { Contact } from './components/pages/Contact.tsx'
import { NewProject } from './components/pages/NewProject.tsx'
import { Container } from './components/layout/Container.tsx'
import { Navbar } from './components/layout/Navbar.tsx'
import { Footer } from './components/layout/Footer.tsx'

export const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Container customClass="min_height">
        <Routes> 
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />   
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}
