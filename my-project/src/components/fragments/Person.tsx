import React from "react"

interface PersonProps {
  name: string,
  photo: string,
  age: number,
  profession: string
}

export const Person: React.FC<PersonProps> =
    ({name ='Valentim', photo, age, profession}) => {
  return (
    <div>
      <img src={photo} alt="Foto da pessoa" />
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {profession}</p>
    </div>
  )
}
