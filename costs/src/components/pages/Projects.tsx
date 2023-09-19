import React from 'react'
import { useLocation } from 'react-router-dom'
import { Messages } from '../layout/Messages.tsx'
import { Container } from '../layout/Container.tsx'
import { LinkButton } from '../layout/LinkButton.tsx'
import styles from './Projects.module.css'

export const Projects = () => {
  const location = useLocation()
  let message = ''
  
  if (location.state)
    message = location.state.message

  return (
    <div className={styles.project_container}>
      {message && <Messages type="success" msg={message} />}
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject">Criar Projeto</LinkButton>
      </div>
      <Container customClass="start">
        <p>projetos...</p>
      </Container>
    </div>
  )
}
