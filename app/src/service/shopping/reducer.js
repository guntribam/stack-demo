const reducer = (state = { cartOpen: false }, action) => {
  const { type, types, data } = action
  switch (type) {
    case types.shopping_init:
      const { products, categories, productsInCart } = data
      return { ...state, products, categories, productsInCart }
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
    case types.shoppingSearchProductsResponse:
      return { ...state, products: data.products }
    case types.shoppingFilterProductByCategoryResponse:
      return { ...state, products: data.products }
    case types.shoppingFilterProductByPriceRangeResponse:
      return { ...state, products: data.products }
    case types.shoppingOpenCart:
      return { ...state, cartOpen: true }
    case types.shoppingCloseCart:
      return { ...state, cartOpen: false, isCheckoutCompleted: false }
    default:
      return state
  }
}

export default reducer
