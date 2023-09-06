import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
