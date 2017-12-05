import { makeProcessor } from '@gp-technical/stack-pack-api'
import { sleep } from '@gp-technical/stack-pack-util'
import db from './db'

const processor = async action => {
  var { types, type, data } = action

  switch (type) {
    case types.shoppingCheckoutCart:
      await sleep(5000)
      return { checkoutCompleted: true }
    case types.shoppingAddProductToCart:
      db.addProductToCart(data)
      return { productsInCart: db.getProductsInCart() }
    case types.shoppingRemoveProductFromCart:
      db.removeProductFromCart(data)
      return { productsInCart: db.getProductsInCart() }
    case types.shoppingSearchProducts:
      return { products: db.queryProducts(data) }
    case types.shoppingFilterProductByCategory:
      return { products: db.queryCategories(data) }
    case types.shoppingFilterProductByPriceRange:
      return { products: db.queryPriceRange(data) }
  }
}

export default makeProcessor(processor)
