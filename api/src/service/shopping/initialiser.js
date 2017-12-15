import db from './db'
import cart from './cart'

const initialiser = async () => {
  return {
    products: db.getProducts(),
    categories: db.getCategories(),
    productsInCart: cart.getProductsInCart(),
    priceRange: db.getPriceRange()
  }
}

export default initialiser
