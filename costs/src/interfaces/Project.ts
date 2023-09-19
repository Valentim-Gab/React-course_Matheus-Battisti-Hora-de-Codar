import { Category } from "./Category"

export interface Project {
  name: string,
  budget: number,
  category: Category,
  cost?: number,
  services?: any[]
}