import React from 'react'
import Project from '../../interfaces/Project.ts'
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  project: Project,
  handleRemove: (id: number) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project, handleRemove}) => {
  const categoryName = project.category.name
  const remove = (e) => {
    e.preventDefault()
    handleRemove(project.id)
  }

  return (
    <div className={styles.project_card}>
      <h4>{project.name}</h4>
      <div className={styles.project_card_body}>
        <p>
          <span>Orçamento:</span> {formatCurrency(project.budget)}
        </p>
        <p className={styles.category_text}>
          <span className={`${styles[categoryName.toLowerCase()]}`}></span>
          {categoryName}
        </p>
        <div className={styles.actions}>
          <Link to={`/project/${project.id}`}>
            <BsPencil />
            Editar
          </Link>
          <button onClick={remove}>
            <BsFillTrashFill />
            Excluir
          </button>
        </div>
      </div>
    </div>
  )
}

function formatCurrency(currency: number) {
  if (!currency) return 0

  return currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
}