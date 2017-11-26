const reducer = (state = { productsInCard: [] }, action) => {
  const { type, types, data } = action
  console.log(action)
  switch (type) {
    case types.shopping_init:
      const { products } = data
      return { ...state, products }
    case types.shoppingAddItemToCard:
      return { ...state, productsInCard: state.productsInCard.concat(data) }
    default:
      return state
  }
}

export default reducer
