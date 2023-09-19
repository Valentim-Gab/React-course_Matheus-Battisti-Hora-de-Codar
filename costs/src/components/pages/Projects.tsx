import React from 'react'
import { useLocation } from 'react-router-dom'
import { Messages } from '../layout/Messages.tsx'

export const Projects = () => {
  const location = useLocation()
  let message = ''
  
  if (location.state)
    message = location.state.message

  return (
    <div>
      {message && <Messages type="success" msg={message} />}
      <h1>Meus Projetos</h1>
    </div>
  )
}
