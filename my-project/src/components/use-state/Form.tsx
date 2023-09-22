import React, { useState } from "react";

export const Form: React.FC = () => {
  const registerUser = (event) => {
    event.preventDefault()
    console.log('Cadastrou o usuário')
    console.log(name)
    console.log(password)  }

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="name" placeholder="Digite seu nome" 
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input type="password" name="password" id="password"
          placeholder="Digite sua senha" autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)} /> 
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}