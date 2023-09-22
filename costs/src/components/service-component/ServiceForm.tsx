import React, { useState } from 'react'
import { FormInput } from '../form/FormInput.tsx'
import { SubmitButton } from '../form/SubmitButton.tsx'
import styles from '../project/ProjectForm.module.css'
import { Project } from '../../interfaces/Project.ts'

interface ServiceFormProps {
  handleSubmit: (project: Project) => void,
  isEdit: boolean,
  projectData: Project
}

export const ServiceForm: React.FC<ServiceFormProps> = ({ handleSubmit, isEdit, projectData }) => {
  const txtBtn = isEdit ? 'Editar Serviço' : 'Adicionar Serviço'
  const [service, setService] = useState({})

  function handleChange(e) {
    let { name, value } = e.target

    if (!isNaN(value))
      value = parseFloat(value)

    setService({ ...service, [name]: value })
  }

  function submit(e) {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <FormInput
        type="text"
        text='Nome do serviço'
        name='name'
        placeholder='Insira o nome do serviço'
        handleOnChange={handleChange}
      />
      <FormInput
        type='number'
        text='Custo do serviço'
        name='cost'
        placeholder='Insira o valor total'
        handleOnChange={handleChange}
      />
      <FormInput
        type='text'
        text='Descrição do serviço'
        name='description'
        placeholder='Descreva o serviço'
        handleOnChange={handleChange}
      />
      <SubmitButton>{txtBtn}</SubmitButton>
    </form>
  )
}
