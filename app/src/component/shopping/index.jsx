import React from 'react'
import { connect } from 'react-redux'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { DebounceInput } from 'react-debounce-input'

import { services, components, actionHub } from '../../loader'

class component extends React.PureComponent {
  state = {
    isCartOpen: false
  }

  onCartClose = () => {
    this.setState({isCartOpen: false})
  }

  onCartOpen = () => {
    this.setState({isCartOpen: true})
    this.props.resetCart()
  }

  onSearchInput = (e) => {
    this.props.searchProducts(e.target.value)
  }

  render () {
    return (
      <components.Box>
        <h2>Feature: <i>Shopping</i></h2>
        <Toolbar style={{background: '#e0e0e0'}}>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle
              style={{color: '#54647a', marginLeft: 20}}
              text="Products"
            />
          </ToolbarGroup>
          <ToolbarGroup firstChild={true}>
            <DebounceInput
              element={TextField}
              minLength={0}
              debounceTimeout={500}
              hintText="Search by name, category..."
              onChange={this.onSearchInput} />
          </ToolbarGroup>
          <ToolbarGroup>
            <FlatButton
              style={{color: '#54647a'}}
              label={`Cart(${(this.props.productsInCart) ? this.props.productsInCart.length : 0})`}
              onClick={() => { this.onCartOpen() }}
            />
          </ToolbarGroup>
        </Toolbar>
        <components.shoppingFilter />
        <components.productList />
        <components.shoppingCart
          isCartOpen={this.state.isCartOpen}
          onCartClose={this.onCartClose}
          isHandlingCheckout={this.props.isHandlingCheckout}
        />
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  productsInCart: services.shopping.selector.getProductsInCart(state)
})

const mapDispatchToProps = (dispatch) => ({
  resetCart: () => dispatch(actionHub.SHOPPING_RESET_CART()),
  searchProducts: (query) => dispatch(actionHub.SHOPPING_SEARCH_PRODUCTS(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
