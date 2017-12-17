import db from './db'
import cart from './cart'

const initialiser = async (session) => {
  if (session.user === undefined) return
  if (session.cart === undefined) session.cart = []

  return {
    products: db.getProducts(),
    categories: db.getCategories(),
    productsInCart: session.cart,
    priceRange: db.getPriceRange()
  }
}

export default initialiser
