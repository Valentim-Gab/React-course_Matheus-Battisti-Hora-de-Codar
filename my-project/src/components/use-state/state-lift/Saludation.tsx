import React from 'react'

const generateSaludation = (name: string): string => {
  return name ? `Olá ${name}, tudo bem?` : ''
}

export const Saludation: React.FC<{ yourName: string }> = ({ yourName }) => {
  return <div>{generateSaludation(yourName)}</div>
}
