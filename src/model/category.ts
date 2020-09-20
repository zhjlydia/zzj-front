/** @format */
class Category {
  id: number
  title?: string
  description?: string
  constructor(data: Category.RawData) {
    this.id = data.id || 0
    this.title = data.title || ''
    if (data.description) {
      this.description = data.description
    }
  }
}

namespace Category {
  export interface RawData {
    id: number
    title: string
    description?: string
    createdAt?: string
    updatedAt?: string
  }
}

export default Category
