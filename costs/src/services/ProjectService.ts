import { Project } from '../interfaces/Project.ts'

export class ProjectService {
  private apiUrl = process.env.REACT_APP_API_URL
  private urlProjects = `${this.apiUrl}/projects`

  async getProjects(): Promise<Project[]> {
    try {
      const response = await fetch(this.urlProjects, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok)
        throw new Error('Erro ao obter projetos')

      const data = await response.json()

      return data
    } catch (error) {
      throw error
    }
  }

  async getProject(id: number): Promise<Project> {
    try {
      const response = await fetch(`${this.urlProjects}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok)
        throw new Error('Erro ao obter projeto')

      const data = await response.json()

      return data
    } catch (error) {
      throw error
    }
  }

  async save(project: Project): Promise<void> {
    try {
      const response = await fetch(this.urlProjects, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      })

      if (!response.ok)
        throw new Error('Erro ao salvar projeto')

      const data = await response.json()

      return data
    } catch (error) {
      throw error
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.urlProjects}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok)
        throw new Error('Erro ao deletar projeto')

      const data = await response.json()

      return data
    } catch (error) {
      throw error
    }
  }

  async update(project: Project): Promise<void> {
    const id = project.id

    try {
      const response = await fetch(`${this.urlProjects}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      })

      if (!response.ok)
        throw new Error('Erro ao atualizar projeto')

      const data = await response.json()

      return data
    } catch (error) {
      throw error
    }
  }
}