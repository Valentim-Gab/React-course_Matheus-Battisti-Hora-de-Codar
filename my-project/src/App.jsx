import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName.tsx'
import { Person } from './components/Person.tsx'

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
    </main>
  )
}

export default App
