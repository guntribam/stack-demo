const reducer = (state = { cartOpen: false }, action) => {
  const { type, types, data } = action
  switch (type) {
    case types.shopping_init:
      const { products, categories, productsInCart, priceRange } = data
      return { ...state, products, categories, productsInCart, priceRange }
    case types.shoppingProductCartAddResponse:
      return {
        ...state,
        productsInCart: data.productsInCart,
        productAdded: data.productAdded,
        isSnackbarOpen: true
      }
    case types.shoppingSnackbarClose:
      return { ...state, isSnackbarOpen: false }
    case types.shoppingProductCartRemoveResponse:
      return {
        ...state,
        productsInCart: data.productsInCart,
        isSnackbarOpen: false
      }
    case types.shoppingCartCheckout:
      return { ...state, isHandlingCheckout: true }
    case types.shoppingCartCheckoutResponse:
      return {
        ...state,
        isHandlingCheckout: false,
        isCheckoutCompleted: data.isCheckoutCompleted,
        productsInCart: data.productsInCart
      }
    case types.shoppingProductSearchResponse:
    case types.shoppingProductFilterByCategoryResponse:
    case types.shoppingProductFilterByPriceRangeResponse:
      return { ...state, products: data.products }
    case types.shoppingCartOpen:
      return { ...state, cartOpen: true }
    case types.shoppingCartClose:
      return { ...state, cartOpen: false, isCheckoutCompleted: false }
    default:
      return state
  }
}

export default reducer
