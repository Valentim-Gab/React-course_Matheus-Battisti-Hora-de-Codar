import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container.tsx'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <Link to={'/'}>
          <img src={logo} alt="Logo da empresa Costs" />
        </Link>
        <ul className={styles.list}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/projects'}>Projetos</Link></li>
          <li><Link to={'/company'}>Empresa</Link></li>
          <li><Link to={'/contact'}>Contato</Link></li>
          <li><Link to={'/newproject'}>Novo projeto</Link></li>
        </ul>
      </Container>
    </nav>
  )
}
