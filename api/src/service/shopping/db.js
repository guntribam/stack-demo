class db {
  static products = [
    {
      name: 'Produc 1',
      price: 10.99,
      description: 'This is a cool product tho\'',
      categories: ['toy', 'cars', 'cool']
    },
    {
      name: 'Produc 2',
      price: 10.99,
      description: 'This is a cool product tho\'',
      categories: ['toy', 'cars', 'cool']
    },
    {
      name: 'Produc 3',
      price: 10.99,
      description: 'This is a cool product tho\'',
      categories: ['toy', 'cars', 'cool']
    },
    {
      name: 'Produc 4',
      price: 10.99,
      description: 'This is a cool product tho\'',
      categories: ['toy', 'cars', 'cool']
    }
  ]

  static getProducts () {
    return this.products
  }
}

export default db
