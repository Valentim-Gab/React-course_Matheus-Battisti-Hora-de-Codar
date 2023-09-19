import React, { useEffect, useState } from 'react'
import { Project } from '../../interfaces/Project'
import { FormInput } from '../form/FormInput.tsx'
import { FormSelect } from '../form/FormSelect.tsx'
import { SubmitButton } from '../form/SubmitButton.tsx'
import styles from './ProjectForm.module.css'

interface ProjectFormProps {
  isEdit: boolean,
  handleSubmit: (project: Project) => void,
  projectData: Project
}

export const ProjectForm: React.FC<ProjectFormProps> = ({isEdit, handleSubmit, projectData}) => {
  let btnSubmitText = (isEdit) ? 'Editar Projeto' : 'Criar Projeto'
  const apiUrl = process.env.REACT_APP_API_URL
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch(`${apiUrl}/categories`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [apiUrl])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.options.selectedIndex].text,
      },
    })
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <FormInput 
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ?? ''}
      />
      <FormInput 
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget ?? ''}
      />
      <div>
        <FormSelect
          name="categoryId"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ?? ''}
        />
      </div>
      <SubmitButton>{btnSubmitText}</SubmitButton>
    </form>
  )
}
