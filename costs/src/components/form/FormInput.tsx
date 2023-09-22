import React from 'react'
import styles from './FormInput.module.css'

interface FormInputProps {
  type: string,
  text: React.ReactNode,
  name: string,
  placeholder: string,
  value?: string,
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>
}

export const FormInput: React.FC<FormInputProps> =
    ({ type, text, name, placeholder, value, handleOnChange }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value?.toString()}
      />
    </div>
  )
}
