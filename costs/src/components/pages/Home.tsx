import React from 'react'
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import { LinkButton } from '../layout/LinkButton.tsx'

export const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Bem-vindo ao <span><strong>Costs</strong></span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject">Criar projeto</LinkButton>
      <img src={savings} alt="Costs" />
    </main>
  )
}
