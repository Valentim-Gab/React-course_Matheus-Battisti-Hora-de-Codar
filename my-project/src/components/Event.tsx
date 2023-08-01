import React from "react";

export const Event: React.FC<{num: number}> = ({num}) => {
  const myEvent = () => {
    console.log(`Fui ativado: ${num}`)
  }

  return (
    <>
      <p>Clique para disparar um evento</p>
      <button onClick={myEvent}>Ativar</button>
    </>
  )
}