import React from 'react'
import { connect } from 'react-redux'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'
import { DebounceInput } from 'react-debounce-input'

import { services, components, actionHub } from '../../loader'

class component extends React.PureComponent {
  state = {
    isSnackBarOpen: false,
    productBeingAdded: null
  }

  handleCart = e => {
    this.props.open === false ? this.props.openCart : this.props.closeCart
  }

  onSearchInput = e => {
    this.props.searchProducts(e.target.value)
  }

  onAddProductToCart = product => {
    this.props.addProductToCart(product)
    this.setState({ productBeingAdded: product, isSnackBarOpen: true })
  }

  onRemoveProductFromCart = product => {
    this.props.removeProductFromCart(product)
  }

  onRemoveProductBeingAdded = () => {
    this.props.removeProductFromCart(this.state.productBeingAdded)
    this.onSnackBarClose()
  }

  onSnackBarClose = () => {
    this.setState({ productBeingAdded: null, isSnackBarOpen: false })
  }

  onCheckoutCart = products => {
    this.props.checkoutCart(products)
  }

  productBeingAddedSnackText = () => {
    if (this.state.productBeingAdded) {
      return `${this.state.productBeingAdded.name} was added to cart`
    } else {
      return 'Product was added to cart'
    }
  }

  render () {
    var { products, isCartOpen } = this.props
    console.info('this.props.openCart', this.props.openCart)

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
              style={{ color: '#54647a' }}
              label={`Cart(${this.props.productsInCart.length})`}
              onClick={this.props.openCart}
            />
          </ToolbarGroup>
        </Toolbar>
        <components.shoppingFilter />
        <components.productList
          products={products}
          onAddProductToCart={this.onAddProductToCart}
        />
        <components.shoppingCart
          isCartOpen={isCartOpen}
          onCartClose={this.props.closeCart}
          products={this.props.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
          onCheckoutCart={this.onCheckoutCart}
          isHandlingCheckout={this.props.isHandlingCheckout}
          checkoutCompleted={this.props.checkoutCompleted}
        />
        <Snackbar
          open={this.state.isSnackBarOpen}
          action="Remove"
          message={this.productBeingAddedSnackText()}
          autoHideDuration={4000}
          onRequestClose={this.onSnackBarClose}
          onActionTouchTap={this.onRemoveProductBeingAdded}
        />
      </components.Box>
    )
  }
}

const mapStateToProps = state => ({
  products: services.shopping.selector.getProducts(state),
  productsInCart: services.shopping.selector.getProductsInCart(state),
  isHandlingCheckout: services.shopping.selector.getHandlingCheckout(state),
  checkoutCompleted: services.shopping.selector.getCheckoutCompleted(state),
  isCartOpen: services.shopping.selector.getCartOpen(state)
})

const mapDispatchToProps = dispatch => ({
  addProductToCart: product =>
    dispatch(actionHub.SHOPPING_ADD_PRODUCT_TO_CART(product)),
  removeProductFromCart: product =>
    dispatch(actionHub.SHOPPING_REMOVE_PRODUCT_FROM_CART(product)),
  checkoutCart: products =>
    dispatch(actionHub.SHOPPING_CHECKOUT_CART(products)),
  resetCart: () => dispatch(actionHub.SHOPPING_RESET_CART()),
  openCart: () => dispatch(actionHub.SHOPPING_OPEN_CART()),
  closeCart: () => dispatch(actionHub.SHOPPING_CLOSE_CART()),
  searchProducts: query => dispatch(actionHub.SHOPPING_SEARCH_PRODUCTS(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
