import { Category } from './category'

describe('Category Unit Tests', (): void => {
  test('constructor of category', (): void => {
    const created_at = new Date()
    const category: Category = new Category({
      name: 'Movie',
      description: 'Movie category',
      is_active: true,
      created_at: created_at
    })

    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'Movie category',
      is_active: true,
      created_at: created_at
    })
  })
})
