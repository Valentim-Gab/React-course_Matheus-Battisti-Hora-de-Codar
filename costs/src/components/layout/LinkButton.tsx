import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

interface LinkButtonProps {
  to: string,
  children: React.ReactNode,
}

export const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
  return (
    <Link className={styles.btn_link} to={to}>
      {children}
    </Link>
  )
}
