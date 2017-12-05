const reducer = (state = {}, action) => {
  const { type, types, data } = action

  switch (type) {
    case types.shopping_init:
      const { products, categories, productsInCart } = data
      return { ...state, products, categories, productsInCart }
    case types.shoppingAddProductToCartResponse:
      return { ...state, productsInCart: data.productsInCart }
    case types.shoppingRemoveProductFromCartResponse:
      return { ...state, productsInCart: data.productsInCart }
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
    case types.shoppingFilterProductByPriceRangeResponse:
      return { ...state, products: data.products }
    default:
      return state
  }
}

export default reducer
