import React from 'react'
import styles from './SubmitButton.module.css'

interface SubmitButtonProps {
  children: React.ReactNode
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return (
    <div>
      <button className={styles.submit_button}>{children}</button>
    </div>
  )
}
