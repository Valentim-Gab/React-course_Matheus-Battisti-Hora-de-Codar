import React from 'react'
import { Service } from '../../interfaces/Service.ts'
import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

export interface ServiceCardProps {
  serviceData: Service
  handleRemove: () => void
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ serviceData, handleRemove }) => {

  const remove = (e) => {

  } 

  return (
    <div className={styles.project_card}>
      <h4>{serviceData.name}</h4>
      <div className={styles.project_card_body}>
        <p>
          <span>Custo total: </span> {formatCurrency(serviceData.cost)}
        </p>
        <p>{serviceData.description}</p>
        <div className={styles.actions}>
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