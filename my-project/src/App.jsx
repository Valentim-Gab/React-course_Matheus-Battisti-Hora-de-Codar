import './App.css';

function App() {
  const name = 'Valentim'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <main className="App">
      <h1>Alterando JSX</h1>
      <h2>Olá, {newName}</h2>
      <h3>Soma, {sum(2, 2)}</h3>
      <img src={url} alt="Minha imagem" />
    </main>
  );
}

export default App;
