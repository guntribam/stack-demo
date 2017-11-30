import { makeProcessor } from '@gp-technical/stack-pack-api'
import { sleep } from '@gp-technical/stack-pack-util'
import db from './db'

const processor = async action => {
  var { types, type, data } = action

  switch (type) {
    case types.shoppingCheckoutCard:
      await sleep(5000)
      return { checkoutCompleted: true }
    case types.shoppingSearchProducts:
      return { products: db.queryProducts(data) }
    case types.shoppingFilterProductByCategory:
      return { products: db.queryCategories(data) }
  }
}

export default makeProcessor(processor)
