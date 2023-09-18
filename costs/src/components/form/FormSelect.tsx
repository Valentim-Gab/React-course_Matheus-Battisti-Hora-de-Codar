import React from 'react'
import styles from './FormSelect.module.css'

interface Option {
  id: number,
  name: string
}
interface FormSelectProps {
  text: React.ReactNode,
  name: string,
  value: string,
  options: Option[],
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>
}

export const FormSelect: React.FC<FormSelectProps> =
    ({ text, name, options, value, handleOnChange }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        {options.map(option => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  )
}
