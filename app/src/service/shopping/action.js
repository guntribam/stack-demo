import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-pack-app'

const api = makeTypes(name, ['filterProductByCategory'])
const local = makeTypes(name, ['addProductToCart', 'removeProductFromCart', 'resetCart'])
const both = makeTypes(name, ['checkoutCart', 'searchProducts'])

const actions = {
  ...makeActions(both),
  ...makeActions(local, { local: true }),
  ...makeActions(api, { local: false })
}

const types = {
  ...api,
  ...local,
  ...both
}

export { actions, types }