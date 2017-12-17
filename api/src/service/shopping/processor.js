import { makeProcessor } from '@gp-technical/stack-pack-api'
import { sleep } from '@gp-technical/stack-pack-util'
import db from './db'
import cart from './cart'

const processor = async action => {
  var { types, type, data, session } = action

  switch (type) {
    case types.shoppingCartCheckout:
      await sleep(5000)
      cart.productCartRemoveAll(session)
      return {
        isCheckoutCompleted: true,
        productsInCart: session.cart
      }
    case types.shoppingProductCartAdd:
      let productAdded = cart.productCartAdd(data, session)
      return {
        productsInCart: session.cart,
        productAdded: productAdded
      }
    case types.shoppingProductCartRemove:
      cart.productCartRemove(data, session)
      return { productsInCart: session.cart }
    case types.shoppingProductSearch:
      return { products: db.queryProducts(data) }
    case types.shoppingProductFilterByCategory:
      return { products: db.queryCategories(data) }
    case types.shoppingProductFilterByPriceRange:
      return { products: db.queryPriceRange(data) }
  }
}

export default makeProcessor(processor)
