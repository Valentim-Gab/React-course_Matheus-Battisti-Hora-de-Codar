import React, { useEffect, useState } from 'react'
import { Project } from '../../interfaces/Project'
import { FormInput } from '../form/FormInput.tsx'
import { FormSelect } from '../form/FormSelect.tsx'
import { SubmitButton } from '../form/SubmitButton.tsx'
import { CategoryService } from '../../services/CategoryService.ts'
import styles from './ProjectForm.module.css'

interface ProjectFormProps {
  isEdit: boolean,
  handleSubmit: (project: Project) => void,
  projectData?: Project
}

export const ProjectForm: React.FC<ProjectFormProps> = ({isEdit, handleSubmit, projectData}) => {
  let btnSubmitText = (isEdit) ? 'Editar Projeto' : 'Criar Projeto'
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})
  
  useEffect(() => {
    const categoryService = new CategoryService()

    categoryService.getCategories().then((data) => {
      setCategories(data)
    }).catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()

    if (!project.category)
      project.category = categories[0]

    handleSubmit(project)
  }

  function handleChange(e) {
    let { name, value } = e.target

    if (!isNaN(value))
      value = parseFloat(value)

    setProject({ ...project, [name]: value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: parseFloat(e.target.value),
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
          value={project.category ? project.category.id : ''}
        />
      </div>
      <SubmitButton>{btnSubmitText}</SubmitButton>
    </form>
  )
}
