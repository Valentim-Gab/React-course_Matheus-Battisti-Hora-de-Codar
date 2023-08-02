import React, { useState } from "react";

export const Conditional: React.FC = () => {
  const [email, setEmail] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setUserEmail(email)
  }

  const clearEmail = (e) => {
    setUserEmail('')
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite o seu email..."
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit" onClick={sendEmail}>
          Enviar email
        </button>
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
            <button onClick={clearEmail}>Limpar email</button>
          </div>       
        )}
      </form>
    </div>
  )
}