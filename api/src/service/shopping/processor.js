import { makeProcessor } from '@gp-technical/stack-pack-api'
import { sleep } from '@gp-technical/stack-pack-util'
import db from './db'
import cart from './cart'

const processor = async action => {
  var { types, type, data } = action

  switch (type) {
    case types.shoppingCheckoutCart:
      await sleep(5000)
      cart.removeAllProductsFromCart()
      return {
        isCheckoutCompleted: true,
        productsInCart: cart.getProductsInCart()
      }
    case types.shoppingAddProductToCart:
      let addedProduct = cart.addProductToCart(data)
      return {
        productsInCart: cart.getProductsInCart(),
        addedProduct: addedProduct
      }
    case types.shoppingRemoveProductFromCart:
      cart.removeProductFromCart(data)
      return { productsInCart: cart.getProductsInCart() }
    case types.shoppingSearchProducts:
      return { products: db.queryProducts(data) }
    case types.shoppingFilterProductByCategory:
      return { products: db.queryCategories(data) }
    case types.shoppingFilterProductByPriceRange:
      return { products: db.queryPriceRange(data) }
  }
}

export default makeProcessor(processor)
