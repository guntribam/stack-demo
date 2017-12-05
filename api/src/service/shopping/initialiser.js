import db from './db'

const initialiser = async () => {
  return {
    products: db.getProducts(),
    categories: db.getCategories(),
    productsInCart: db.getProductsInCart()
  }
}

export default initialiser
