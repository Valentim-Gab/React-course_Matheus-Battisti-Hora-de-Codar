import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { Loading } from '../layout/Loading.tsx'
import { Container } from '../layout/Container.tsx'
import { ProjectService } from '../../services/ProjectService.ts'
import { BsPencil, BsXLg} from 'react-icons/bs'

export const Project = () => {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)

  useEffect(() => {
    setTimeout(()=>{const projectService = new ProjectService()

      if (!id) return
  
      projectService.getProject(parseFloat(id)).then(data => {
        setProject(data)
      }).catch(err => console.log(err))}, 0)
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  return (
    <section className={styles.project}>
      {project.id ? (
        <div className={styles.project_details}>
          <Container customClass="column">
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
                  <p>Detalhes</p>
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
  return currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
}