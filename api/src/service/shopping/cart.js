
var productsInCart = []

const getProductsInCart = () => {
  return productsInCart
}

const addProductToCart = product => {
  let inCartId = productsInCart.reduce((accumulator, current) => {
    return current.inCartId + accumulator
  }, 1)
  let addedProduct = { ...product, inCartId: inCartId }
  productsInCart = [ ...productsInCart, addedProduct ]
  return addedProduct
}

const removeProductFromCart = productToRemove => {
  productsInCart = productsInCart.filter((product) => {
    return product.inCartId !== productToRemove.inCartId
  })
}

const removeAllProductsFromCart = () => {
  productsInCart = []
}

export default {
  getProductsInCart,
  addProductToCart,
  removeProductFromCart,
  removeAllProductsFromCart
}
