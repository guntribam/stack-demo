class db {
  static products = [
    {
      id: 1,
      name: 'Produc 1',
      price: 10.99,
      imageURL: 'https://i.ebayimg.com/images/g/pJoAAOSwx~JWE2t0/s-l300.jpg',
      description: 'This is a cool product tho\'',
      categories: ['toy', 'star-wars', 'cool']
    },
    {
      id: 2,
      name: 'Produc 2',
      price: 10.99,
      imageURL: 'https://i.ebayimg.com/images/g/pJoAAOSwx~JWE2t0/s-l300.jpg',
      description: 'This is a cool product tho\'',
      categories: ['toy', 'star-wars', 'cool']
    },
    {
      id: 3,
      name: 'Produc 3',
      price: 10.99,
      imageURL: 'https://i.ebayimg.com/images/g/pJoAAOSwx~JWE2t0/s-l300.jpg',
      description: 'This is a cool product tho\'',
      categories: ['toy', 'star-wars', 'cool']
    },
    {
      id: 4,
      name: 'Produc 4',
      price: 10.99,
      imageURL: 'https://i.ebayimg.com/images/g/pJoAAOSwx~JWE2t0/s-l300.jpg',
      description: 'This is a cool product tho\'',
      categories: ['toy', 'star-wars', 'cool']
    }
  ]

  static getProducts () {
    return this.products
  }
}

export default db
