import React, { useEffect, useMemo, useState } from 'react'
// @ts-ignore
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { Loading } from '../layout/Loading.tsx'
import { Container } from '../layout/Container.tsx'
import { ProjectService } from '../../services/ProjectService.ts'
import { ProjectForm } from '../project/ProjectForm.tsx'
import { Messages } from '../layout/Messages.tsx'
import { BsPencil, BsXLg} from 'react-icons/bs'

export const Project = () => {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [message, setMessage] = useState()
  const [typeMessage, setTypeMessage] = useState()
  const projectService = useMemo(() => new ProjectService(), [])

  useEffect(() => {
    if (!id) return
  
    projectService.getProject(parseFloat(id)).then(data => {
      setProject(data)
    }).catch(err => console.log(err))
  }, [id, projectService])

  function updateProject(project) {
    if (project.budget < project.cost) {
      setMessage('Orçamento deve ser maior que o custo')
      setTypeMessage('error')

      setTimeout(() => {
        setMessage('')
      }, 3000)
      
      return false
    }

    projectService.update(project).then((data) => {
      setProject(data)
      setShowProjectForm(false)
      setMessage('Projeto atualizado')
      setTypeMessage('success')
    }).catch(err => console.log(err))
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  return (
    <section className={styles.project}>
      {project.id ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Messages type={typeMessage} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {showProjectForm ? (
                  <>
                    Fechar <BsXLg />
                  </>
                ) : (
                  <>
                    Editar Projeto <BsPencil />
                  </>
                )}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Category: </span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento: </span> {formatCurrency(project.budget)}
                  </p>
                  <p>
                    <span>Total Utilizado: </span> {formatCurrency(project.cost)}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={updateProject}
                    projectData={project}
                    isEdit={true}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      )
      : (<Loading />)}
    </section>
  )
}

function formatCurrency(currency: number) {
  if (!currency) return 0

  return currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
}