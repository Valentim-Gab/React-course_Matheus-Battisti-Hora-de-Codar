import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from './components/layout/Container.tsx'
import { Navbar } from './components/layout/Navbar.tsx'
import { Footer } from './components/layout/Footer.tsx'
import { routes } from './App.route.tsx'

export const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Container customClass="min_height">
        <Routes> 
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))} 
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}
