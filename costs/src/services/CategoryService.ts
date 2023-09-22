import { Category } from '../interfaces/Category'

export class CategoryService {
  private apiUrl = process.env.REACT_APP_API_URL
  private urlCategories = `${this.apiUrl}/categories`

  async getCategories(): Promise<Category[]> {
    try {
      const response = await fetch(this.urlCategories, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok)
        throw new Error('Erro ao obter categorias')

      const data = await response.json()

      return data
    } catch (error) {
      throw error
    }
  }
}