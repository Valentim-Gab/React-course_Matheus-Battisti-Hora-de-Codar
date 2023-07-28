import { useEffect } from 'react'
import './App.css'

function AppUseEffectExample() {
  useEffect(() => {
    //const response = fetch...
  }, [state])

  return (
    <>
      {isLoading ?
      <span>

      </span>
      :
      <span>

      </span>
      }
      <main className="App">
        <h1>Estudo de useEffect e Loading</h1>
      </main>
    </>
  )
}

export default AppUseEffectExample
