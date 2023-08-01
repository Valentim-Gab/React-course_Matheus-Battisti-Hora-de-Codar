import React from "react";

export const Form: React.FC = () => {
  const registerUser = (event) => {
    event.preventDefault()
    console.log('Cadastrou o usuário')
  }

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={registerUser}>
        <div>
          <input type="text" name="name" id="name" placeholder="Digite seu nome" />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}