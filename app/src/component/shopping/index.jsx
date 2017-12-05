import React from 'react'
import { connect } from 'react-redux'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { DebounceInput } from 'react-debounce-input'

import { services, components, actionHub } from '../../loader'

class component extends React.PureComponent {

  handleCart = e => {
    this.props.open === false ? this.props.openCart : this.props.closeCart
  }

  onSearchInput = e => {
    this.props.searchProducts(e.target.value)
  }

  render () {
    const { productsInCart, isCartOpen } = this.props

    return (
      <components.Box>
        <h2>
          Feature: <i>Shopping</i>
        </h2>
        <Toolbar style={{ background: '#e0e0e0' }}>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle
              style={{ color: '#54647a', marginLeft: 20 }}
              text="Products"
            />
          </ToolbarGroup>
          <ToolbarGroup firstChild={true}>
            <DebounceInput
              element={TextField}
              minLength={0}
              debounceTimeout={500}
              hintText="Search by name, category..."
              onChange={this.onSearchInput}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <FlatButton
              style={{color: '#54647a'}}
              label={`Cart(${(productsInCart) ? productsInCart.length : 0})`}
              onClick={this.props.openCart}
            />
          </ToolbarGroup>
        </Toolbar>
        <components.shoppingFilter />
        <components.productList />
        <components.shoppingCart
          isCartOpen={ isCartOpen }
          onCartClose={this.props.closeCart}
        />
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  isCartOpen: services.shopping.selector.getCartOpen(state),
  productsInCart: services.shopping.selector.getProductsInCart(state)
})

const mapDispatchToProps = (dispatch) => ({
  openCart: () => dispatch(actionHub.SHOPPING_OPEN_CART()),
  closeCart: () => dispatch(actionHub.SHOPPING_CLOSE_CART()),
  resetCart: () => dispatch(actionHub.SHOPPING_RESET_CART()),
  searchProducts: (query) => dispatch(actionHub.SHOPPING_SEARCH_PRODUCTS(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
