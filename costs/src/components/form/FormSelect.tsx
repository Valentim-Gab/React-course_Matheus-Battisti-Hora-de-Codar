import React from 'react'
import { Category } from '../../interfaces/Category'
import styles from './FormSelect.module.css'
interface FormSelectProps {
  text: React.ReactNode,
  name: string,
  value: string,
  options: Category[],
  handleOnChange: React.ChangeEventHandler<HTMLSelectElement>
}

export const FormSelect: React.FC<FormSelectProps> =
    ({ text, name, options, value, handleOnChange }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        {options.map(option => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  )
}
