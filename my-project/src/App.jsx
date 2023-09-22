import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { Company } from './pages/Company.tsx'
import { Contact } from './pages/Contact.tsx'
import { NavBar } from './components/layout/NavBar.tsx'
import { Footer } from './components/layout/Footer.tsx'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
