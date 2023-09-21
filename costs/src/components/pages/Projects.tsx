import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Messages } from '../layout/Messages.tsx'
import { Container } from '../layout/Container.tsx'
import { Loading } from '../layout/Loading.tsx'
import { LinkButton } from '../layout/LinkButton.tsx'
import { ProjectCard } from '../project/ProjectCard.tsx'
import { ProjectService } from '../../services/ProjectService.ts'
import styles from './Projects.module.css'

export const Projects = () => {
  const [projects, setProjects] = useState()
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')
  const location = useLocation()
  const projectService = new ProjectService();
  let message = ''
  
  if (location.state)
    message = location.state.message

  useEffect(() => {
    projectService.getProjects().then(data => {
      setProjects(data)
      setRemoveLoading(true)
    }).catch(err => console.log(err))
  }, [])

  function removeProject(id: number) {
    projectService.delete(id).then(() => {
      setProjects(projects.filter(
          project => project.id !== id
        ))
      setProjectMessage('Projeto removido com sucesso!')
    }).catch(err => console.log(err))
  }
  
  return (
    <div className={styles.project_container}>
      {message && <Messages type="success" msg={message} />}
      {projectMessage && <Messages type="success" msg={projectMessage} />}
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject">Criar Projeto</LinkButton>
      </div>
      <Container customClass="start">
        <div className={styles.projects}>
          {projects && projects.length > 0 &&
            projects.map(project =>
              <ProjectCard
                project={project}
                key={project.id}
                handleRemove={removeProject}
              />
            )}
            {!removeLoading && <Loading />}
            {removeLoading && projects.length === 0 && (
              <h3 className={styles.no_projects}>Não há projetos cadastrados!</h3>
            )}
        </div>
      </Container>
    </div>
  )
}
