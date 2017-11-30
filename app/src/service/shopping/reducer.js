const reducer = (state = { productsInCart: [] }, action) => {
  const { type, types, data } = action

  switch (type) {
    case types.shopping_init:
      const { products } = data
      const { categories } = data
      return { ...state, products, categories }
    case types.shoppingAddProductToCart:
      return { ...state, productsInCart: state.productsInCart.concat(data) }
    case types.shoppingRemoveProductFromCart:
        // Immutable remove element from array
        // 1 - make a copy, 2 - find index, 3 - splice copy
      debugger;
      const productsInCart = state.productsInCart.slice()

      const productToRemoveIndex = productsInCart.findIndex((product) => {
        return product.id === data.id
      })
      productsInCart.splice(productToRemoveIndex, 1)
      return { ...state, productsInCart: productsInCart }
    case types.shoppingCheckoutCart:
      return { ...state, isHandlingCheckout: true }
    case types.shoppingCheckoutCartResponse:
      return { ...state, isHandlingCheckout: false, checkoutCompleted: data.checkoutCompleted, productsInCart: [] }
    case types.shoppingResetCart:
      return { ...state, checkoutCompleted: false }
    case types.shoppingSearchProductsResponse:
      return { ...state, products: data.products }
    case types.shoppingFilterProductByCategoryResponse:
      return { ...state, products: data.products }
    default:
      return state
  }
}

export default reducer
