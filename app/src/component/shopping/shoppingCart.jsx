import React from 'react'
import Dialog from 'material-ui/Dialog'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import { red500 } from 'material-ui/styles/colors'
import CircularProgress from 'material-ui/CircularProgress'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from 'material-ui/Table'

import { services, actionHub } from '../../loader'

const style = {
  noProduct: {
    textAlign: 'center'
  }
}

class component extends React.PureComponent {

  onRemoveProductFromCart = (product) => {
    this.props.removeProductFromCart(product)
  }

  onCheckoutCart = () => {
    this.props.checkoutCart()
  }

  cartTotal = () => {
    let total = this.props.productsInCart.reduce((currentTotal, product) => {
      return currentTotal + product.price
    }, 0)
    return total.toFixed(2)
  }

  renderActions = () => {
    var { productsInCart } = this.props
    if (productsInCart && productsInCart.length > 0) {
      return [
        <FlatButton label="Back Shopping" onClick={this.props.closeCart} />,
        <FlatButton
          label="Checkout"
          primary={true}
          onClick={ () => { this.onCheckoutCart() }}
        />
      ]
    } else {
      return [
        <FlatButton
          label="Back Shopping"
          primary={true}
          onClick={this.props.closeCart}
        />
      ]
    }
  }

  renderProductsInCart = () => {
    var { productsInCart } = this.props
    if (productsInCart && productsInCart.length > 0) {
      return (
        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Acions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {productsInCart.map((product, index) => (
              <TableRow key={index}>
                <TableRowColumn>{product.name}</TableRowColumn>
                <TableRowColumn>$ {product.price}</TableRowColumn>
                <TableRowColumn>{product.description}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton
                    onClick={() => {
                      this.onRemoveProductFromCart(product)
                    }}
                  >
                    <FontIcon className="material-icons" color={red500}>
                      delete
                    </FontIcon>
                  </FlatButton>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter adjustForCheckbox={false}>
            <TableRow>
              <TableRowColumn colSpan="4" style={{ textAlign: 'right' }}>
                Total: ${this.cartTotal()}
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      )
    } else {
      return <p style={style.noProduct}>No product in Cart.</p>
    }
  }

  renderDialogContent = () => {
    const { isHandlingCheckout, isCheckoutCompleted } = this.props

    if (isHandlingCheckout) {
      return (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress />
          <p> Checking payment </p>
        </div>
      )
    } else if (isCheckoutCompleted) {
      return (<div style={{textAlign: 'center'}}> Checkout completed </div>)
    } else {
      return this.renderProductsInCart()
    }
  }

  render () {
    var { isCartOpen } = this.props
    return (
      <Dialog
        title="Shopping Cart - Checkout"
        modal={false}
        open={isCartOpen}
        onRequestClose={this.props.closeCart}
        actions={this.renderActions()}
      >
        {this.renderDialogContent()}
      </Dialog>
    )
  }
}

const mapStateToProps = state => ({
  isCartOpen: services.shopping.selector.getCartOpen(state),
  productsInCart: services.shopping.selector.getProductsInCart(state),
  isCheckoutCompleted: services.shopping.selector.getIsCheckoutCompleted(state),
  isHandlingCheckout: services.shopping.selector.getHandlingCheckout(state)
})

const mapDispatchToProps = dispatch => ({
  resetCart: () => dispatch(actionHub.SHOPPING_RESET_CART()),
  openCart: () => dispatch(actionHub.SHOPPING_OPEN_CART()),
  closeCart: () => dispatch(actionHub.SHOPPING_CLOSE_CART()),
  removeProductFromCart: (product) => dispatch(actionHub.SHOPPING_REMOVE_PRODUCT_FROM_CART(product)),
  checkoutCart: () => dispatch(actionHub.SHOPPING_CHECKOUT_CART())
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
