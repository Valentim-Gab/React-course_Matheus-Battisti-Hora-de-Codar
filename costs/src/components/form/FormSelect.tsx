import React from 'react'
import styles from './FormSelect.module.css'

interface FormSelectProps {
  text: React.ReactNode,
  name: string,
  value: string,
  options: string[],
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>
}

export const FormSelect: React.FC<FormSelectProps> =
    ({ text, name, options, value, handleOnChange }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option selected disabled>Selecione uma opção</option>
        <option value="a">Teste 1</option>
      </select>
    </div>
  )
}
