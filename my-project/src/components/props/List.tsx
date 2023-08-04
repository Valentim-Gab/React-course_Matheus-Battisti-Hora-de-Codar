import React from "react"
import { ListItem } from "./ListItem"

export const List: React.FC = () => {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <ListItem mark="Ferrari" launch={1985}></ListItem>
        <ListItem mark="Fiat" launch={1964}></ListItem>
        <ListItem></ListItem>
      </ul>
    </>
  )
}