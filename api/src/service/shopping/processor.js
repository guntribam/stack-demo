import { makeProcessor } from '@gp-technical/stack-pack-api'

const sleep = (ms = 0) => {
  return new Promise(r => setTimeout(r, ms))
}

const processor = async action => {
  var { types, type, data } = action

  switch (type) {
    case types.shoppingCheckoutCard:
      await sleep(5000)
      return { checkoutCompleted: true }
  }
}

export default makeProcessor(processor)
