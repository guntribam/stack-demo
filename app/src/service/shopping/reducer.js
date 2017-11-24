const reducer = (state = {}, action) => {
  const { type, types, data } = action

  switch (type) {
    case types.shopping_init:
      const { products } = data
      return { ...state, products }
    default:
      return state
  }
}

export default reducer
