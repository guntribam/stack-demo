import React from 'react'
import Dialog from 'material-ui/Dialog'
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

const style = {
  noProduct: {
    textAlign: 'center'
  }
}

class component extends React.PureComponent {

  cartTotal = () => {
    return this.props.products.reduce((currentTotal, product) => {
      return currentTotal + product.price
    }, 0)
  }

  renderActions = () => {
    var { products } = this.props
    if (products && products.length > 0) {
      return [
        <FlatButton
          label="Back Shopping"
          onClick={this.props.onCartClose}
        />,
        <FlatButton
          label="Checkout"
          primary={true}
          onClick={ () => { this.props.onCheckoutCart(products) }}
        />
      ]
    } else {
      return [
        <FlatButton
          label="Back Shopping"
          primary={true}
          onClick={this.props.onCartClose}
        />
      ]
    }
  }

  renderProductsInCart = () => {
    var { products } = this.props
    if (products && products.length > 0) {
      return (
        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Acions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableRowColumn>{product.name}</TableRowColumn>
                <TableRowColumn>$ {product.price}</TableRowColumn>
                <TableRowColumn>{product.description}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton onClick={() => { this.props.onRemoveProductFromCart(product) }}>
                    <FontIcon className="material-icons" color={red500}>delete</FontIcon>
                  </FlatButton>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter adjustForCheckbox={false}>
           <TableRow>
             <TableRowColumn colSpan="4" style={{textAlign: 'right'}}>
               Total: ${this.cartTotal()}
             </TableRowColumn>
           </TableRow>
         </TableFooter>
        </Table>
      )
    } else {
      return (
        <p style={style.noProduct}>
          No product in Cart.
        </p>
      )
    }
  }

  renderDialogContent = () => {
    if (this.props.isHandlingCheckout) {
      return (
        <div style={{textAlign: 'center'}}>
          <CircularProgress />
          <p> Checking payment </p>
        </div>
      )
    } else {
      if (this.props.checkoutCompleted) {
        return (<div style={{textAlign: 'center'}}> Checkout completed </div>)
      } else {
        return this.renderProductsInCart()
      }
    }
  }

  render () {
    return (
      <Dialog
       title="Shopping Cart - Checkout"
       modal={false}
       open={this.props.isCartOpen}
       onRequestClose={this.props.onCartClose}
       actions={this.renderActions()}
     >
      {this.renderDialogContent()}
     </Dialog>
    )
  }
}

export default component
