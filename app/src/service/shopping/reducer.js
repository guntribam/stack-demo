const reducer = (state = {}, action) => {
  const { type, types, data } = action

  switch (type) {
    case types.shopping_init:
      const { products, categories, productsInCart, priceRange } = data
      return { ...state, products, categories, productsInCart, priceRange }
    case types.shoppingAddProductToCartResponse:
      return {
        ...state,
        productsInCart: data.productsInCart,
        addedProduct: data.addedProduct,
        isSnackBarOpen: true
      }
    case types.shoppingCloseAddedProductSnackbar:
      return { ...state, isSnackBarOpen: false }
    case types.shoppingRemoveProductFromCartResponse:
      return {
        ...state,
        productsInCart: data.productsInCart,
        isSnackBarOpen: false
      }
    case types.shoppingCheckoutCart:
      return { ...state, isHandlingCheckout: true }
    case types.shoppingCheckoutCartResponse:
      return {
        ...state,
        isHandlingCheckout: false,
        isCheckoutCompleted: data.isCheckoutCompleted,
        productsInCart: data.productsInCart
      }
    case types.shoppingResetCart:
      return { ...state, isCheckoutCompleted: false }
    case types.shoppingSearchProductsResponse:
      return { ...state, products: data.products }
    case types.shoppingFilterProductByCategoryResponse:
      return { ...state, products: data.products }
    case types.shoppingFilterProductByPriceRangeResponse:
      return { ...state, products: data.products }
    default:
      return state
  }
}

export default reducer
