import React from "react";
import { Button } from "./event/Button.tsx";

export const Event: React.FC<{num: number}> = ({num}) => {
  const myEvent = () => {
    console.log(`Fui ativado: ${num}`)
  }

  const secondEvent = () => {
    console.log('Ativando o segundo evento')
  }

  return (
    <>
      <p>Clique para disparar um evento</p>
      <button onClick={myEvent}>Ativar</button>
      <Button click={myEvent}>Primeiro evento</Button>
      <Button click={secondEvent}>Segundo evento</Button>
    </>
  )
}

