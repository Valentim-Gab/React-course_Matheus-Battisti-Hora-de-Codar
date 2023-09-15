import React from 'react'
import { FormInput } from '../form/FormInput.tsx'
import { FormSelect } from '../form/FormSelect.tsx'
import { SubmitButton } from '../form/SubmitButton.tsx'
import styles from './ProjectForm.module.css'

export const ProjectForm: React.FC<{isEdit: boolean}> = ({isEdit}) => {
  let btnSubmitText = (isEdit) ? 'Editar Projeto' : 'Criar Projeto'

  return (
    <form className={styles.form}>
      <FormInput 
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <FormInput 
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
      />
      <div>
        <FormSelect
          name="categoryId"
          text="Selecione a categoria"
        />
      </div>
      <SubmitButton>{btnSubmitText}</SubmitButton>
    </form>
  )
}
