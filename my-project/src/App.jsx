import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName.tsx'
import { Person } from './components/Person.tsx'
import Phrase from './components/Phrase'
import { List } from './components/List.tsx'
import { Event } from './components/Event.tsx'
import { Form } from './components/Form.tsx'
import { Conditional } from './components/Conditional.tsx'
import { ListRender } from './components/ListRender.tsx'
import { useState } from 'react'
import { YourName } from './components/YourName.tsx'
import { Saludation } from './components/Saludation.tsx'

function App() {
  //Variáveis e JS no HTML
  const name = 'Valentim'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  function sum(a, b) {
    return a + b
  }

  // Renderizando listas
  const items = ['React', 'Vue', 'Angular']

  // State lift
  const [yourName, setYourName] = useState()

  return (
    <main className="App">
      <h1>Alterando JSX</h1>
      <Phrase></Phrase>
      <h2>Olá, {newName}</h2>
      <h3>Soma, {sum(2, 2)}</h3>
      <img src={url} alt="Minha imagem" />
      <hr />
      <HelloWorld />
      <hr />
      <SayMyName name={name}></SayMyName>
      <SayMyName name="João"></SayMyName>
      <hr />
      <Person name="Maria" age="20" profession="Enfermeira" photo={url}>
      </Person>
      <hr />
      <List></List>
      <hr />
      <Event num={1}></Event>
      <Event num={2}></Event>
      <hr />
      <Form></Form>
      <hr />
      <Conditional></Conditional>
      <hr />
      <h2>Renderização de listas</h2>
      <ListRender items={items}></ListRender>
      <ListRender items={[]}></ListRender>
      <hr />
      <h2>State Lift</h2>
      <YourName setYourName={setYourName}></YourName>
      <Saludation yourName={yourName}></Saludation>
    </main>
  )
}

export default App
