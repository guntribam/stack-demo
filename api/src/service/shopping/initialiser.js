import db from './db'

const initialiser = async () => {
  return {
    products: db.getProducts(),
    categories: db.getCategories(),
    productsInCart: db.getProductsInCart(),
    priceRange: db.getPriceRange()
  }
}

export default initialiser
