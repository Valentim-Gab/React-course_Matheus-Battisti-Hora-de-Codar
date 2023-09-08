import React, { ReactNode } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode,
  customClass: string
}

export const Container: React.FC<ContainerProps> = (props) => {
  return (
    <main className={`${styles.container} ${styles[props.customClass]}`}>
      { props.children }
    </main>
  )
}
