import React from 'react'
import { ProjectForm } from '../project/ProjectForm.tsx'
import styles from './NewProject.module.css'

export const NewProject = () => {
  return (
    <div className={styles.new_project_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  )
}
