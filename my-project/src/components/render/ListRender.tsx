import React from 'react'

export const ListRender: React.FC<{ items: [] }> = ({ items }) => {
  return (
    <>
      <h3>Lista de coisas boas</h3>
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>Não há itens na lista!</p>
        )}
      </ul>
    </>
  )
}
