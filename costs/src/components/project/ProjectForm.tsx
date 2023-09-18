import React, { useEffect, useState } from 'react'
import { FormInput } from '../form/FormInput.tsx'
import { FormSelect } from '../form/FormSelect.tsx'
import { SubmitButton } from '../form/SubmitButton.tsx'
import styles from './ProjectForm.module.css'

export const ProjectForm: React.FC<{isEdit: boolean}> = ({isEdit}) => {
  let btnSubmitText = (isEdit) ? 'Editar Projeto' : 'Criar Projeto'
  const apiUrl = process.env.REACT_APP_API_URL;
  const [categories, setCategories] = useState([])

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
          options={categories}
        />
      </div>
      <SubmitButton>{btnSubmitText}</SubmitButton>
    </form>
  )
}
