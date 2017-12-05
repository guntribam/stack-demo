import React from 'react'
import { Card, CardTitle, CardMedia, CardActions } from 'material-ui/Card'
import Snackbar from 'material-ui/Snackbar'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'

import { services, actionHub } from '../../loader'

const style = {
  productWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  productCard: {
    marginLeft: 20,
    marginTop: 20,
    maxWidth: '30%'
  }
}

class component extends React.PureComponent {

  onAddProductToCart = (product) => {
    this.props.addProductToCart(product)
  }

  onRemoveProductFromCart = (product) => {
    this.props.removeProductFromCart(product)
  }

  onRemoveAddedProduct = () => {
    this.props.removeProductFromCart(this.props.addedProduct)
  }

  onSnackBarClose = (product) => {
    this.props.closeAddedProductSnackbar()
  }

  addedProductSnackText = () => {
    if (this.props.addedProduct) {
      return `${this.props.addedProduct.name} was added to cart`
    } else {
      return 'Product was added to cart'
    }
  }

  render () {
    var { products, isSnackBarOpen } = this.props
    if (products && products.length > 0) {
      return (
        <div style={style.productWrapper}>
          {products.map((product, index) => (
            <Card key={index} style={style.productCard}>
              <CardTitle title={product.name} subtitle={product.description} />
              <CardMedia>
                <img src={product.imageURL} style={{display: 'block', margin: 'auto'}} />
              </CardMedia>
              <CardTitle title={`$ ${product.price}`} subtitle={product.categories.join()} />
              <CardActions>
                <FlatButton label="Add to Cart" onClick={() => { this.onAddProductToCart(product) }} />
              </CardActions>
            </Card>
         ))}
         <Snackbar
           open={ isSnackBarOpen }
           action="Remove"
           message={this.addedProductSnackText()}
           autoHideDuration={4000}
           onRequestClose={this.onSnackBarClose}
           onActionTouchTap={this.onRemoveAddedProduct}
         />
        </div>
      )
    } else {
      return (<div> No product in the store </div>)
    }
  }
}

const mapStateToProps = (state) => ({
  products: services.shopping.selector.getProducts(state),
  addedProduct: services.shopping.selector.getAddedProduct(state),
  isSnackBarOpen: services.shopping.selector.getIsSnackBarOpen(state)
})

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(actionHub.SHOPPING_ADD_PRODUCT_TO_CART(product)),
  removeProductFromCart: (product) => dispatch(actionHub.SHOPPING_REMOVE_PRODUCT_FROM_CART(product)),
  closeAddedProductSnackbar: () => dispatch(actionHub.SHOPPING_CLOSE_ADDED_PRODUCT_SNACKBAR())
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
