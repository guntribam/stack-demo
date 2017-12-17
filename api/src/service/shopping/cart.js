const nextInCartId = cart => {
  return cart.reduce((accumulator, current) => {
    return current.inCartId + accumulator
  }, 1)
}

const productCartAdd = (product, session) => {
  let addedProduct = { ...product, inCartId: nextInCartId(session.cart) }
  session.cart = [ ...session.cart, addedProduct ]
  return addedProduct
}

const productCartRemove = (productToRemove, session) => {
  session.cart = session.cart.filter((product) => {
    return product.inCartId !== productToRemove.inCartId
  })
}

const productCartRemoveAll = (session) => {
  session.cart = []
}

export default {
  productCartAdd,
  productCartRemove,
  productCartRemoveAll
}
