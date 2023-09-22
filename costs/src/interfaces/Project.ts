import { Category } from './Category'
import { Service } from './Service'

export interface Project {
  id?: number,
  name: string,
  budget: number,
  category: Category,
  cost?: number,
  services?: Service[]
}