import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import { services, components, actionHub } from '../../loader'

class component extends React.PureComponent {
  onAddProductToCard = (product) => {
    this.props.addItemToCard(product)
  }

  render () {
    var { products } = this.props
    return (
      <components.Box>
        <h2>Feature: <i>Shopping</i></h2>
        <AppBar
          title={<span>Products</span>}
          iconElementRight={<FlatButton label={`Card(${this.props.productsInCard.length})`} />} />
        <components.productList products={products} onAddProductToCard={this.onAddProductToCard} />
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  products: services.shopping.selector.getProducts(state),
  productsInCard: services.shopping.selector.getProductsInCard(state)
})

const mapDispatchToProps = (dispatch) => ({
  addItemToCard: (data) => dispatch(actionHub.SHOPPING_ADD_ITEM_TO_CARD(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
