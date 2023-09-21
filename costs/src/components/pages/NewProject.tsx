import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Project } from '../../interfaces/Project'
import { ProjectForm } from '../project/ProjectForm.tsx'
import { ProjectService } from '../../services/ProjectService.ts'
import styles from './NewProject.module.css'

export const NewProject = () => {
  const navigate = useNavigate()
  const projectService = new ProjectService;

  function createPost(project: Project) {
    project.cost = 0
    project.services = []

    projectService.save(project).then(data => {
      navigate('/projects', { state: { message: 'Projeto criado com sucesso!' }})
    }).catch(err => console.log(err))
  }

  return (
    <div className={styles.new_project_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm isEdit={false} handleSubmit={createPost} />
    </div>
  )
}
