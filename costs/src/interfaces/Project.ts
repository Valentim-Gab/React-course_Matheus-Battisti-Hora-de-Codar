import { Category } from "./Category"

export interface Project {
  id?: number,
  name: string,
  budget: number,
  category: Category,
  cost?: number,
  services?: any[]
}