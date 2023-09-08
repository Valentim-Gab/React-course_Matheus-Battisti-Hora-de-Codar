import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/pages/Home.tsx'
import { Company } from './components/pages/Company.tsx'
import { Contact } from './components/pages/Contact.tsx'
import { NewProject } from './components/pages/NewProject.tsx'
import { Container } from './components/layout/Container.tsx'

export const App = () => {
  return (
    <Router>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/company'}>Empresa</Link></li>
        <li><Link to={'/contact'}>Contato</Link></li>
        <li><Link to={'/newproject'}>Novo projeto</Link></li>
      </ul>
      <Container customClass="min_height">
        <Routes> 
          <Route exact path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />   
        </Routes>
      </Container>
      <p>footer</p>
    </Router>
  )
}
