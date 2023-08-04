import React from 'react'

interface YourNameProps {
  setYourName: (name: string) => void
}

// rafc para gerar components TSX
export const YourName: React.FC<YourNameProps> = ({ setYourName }) => {
  return (
    <div>
      <label htmlFor="name">Digite o seu nome: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Qual é o seu nome?"
        onChange={e => setYourName(e.target.value)}
      />
    </div>
  )
}
