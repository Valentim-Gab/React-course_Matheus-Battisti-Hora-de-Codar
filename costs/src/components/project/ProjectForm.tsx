import React from 'react'

export const ProjectForm = () => {
  return (
    <form>
      <input type="text" placeholder="Insira o nome do projeto" />
      <input type="number" placeholder="Insira o orçamento total" />
      <div>
        <select name="categoryId">
          <option disabled selected>Selecione a categoria</option>
        </select>
      </div>
      <div>
        <button type="submit">Criar projeto</button>
      </div>
    </form>
  )
}
