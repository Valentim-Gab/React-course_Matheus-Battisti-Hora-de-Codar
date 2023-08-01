import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName.tsx'
import { Person } from './components/Person.tsx'
import Phrase from './components/Phrase'
import { List } from './components/List.tsx'
import { Event } from './components/Event.tsx'
import { Form } from './components/Form.tsx'

function App() {
  const name = 'Valentim'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

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
    </main>
  )
}

export default App
