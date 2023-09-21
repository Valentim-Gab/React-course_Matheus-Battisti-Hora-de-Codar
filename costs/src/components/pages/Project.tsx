import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { ProjectService } from '../../services/ProjectService.ts'

export const Project = () => {
  const { id } = useParams()
  const [project, setProject] = useState([])

  useEffect(() => {
    const projectService = new ProjectService()

    if (!id) return

    projectService.getProject(parseFloat(id)).then(data => {
      setProject(data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      {project && (
        <p>{project.name}</p>
      )}
    </div>
  )
}
