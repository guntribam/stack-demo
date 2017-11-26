import React from 'react'
import { connect } from 'react-redux'
import Divider from 'material-ui/Divider'

import { services, components } from '../../loader'

class component extends React.PureComponent {
  render () {
    var { products } = this.props
    return (
      <components.Box>
        <h2>Feature: <i>Shopping List</i></h2>
        <h3>A list of available product to buy.</h3>
        <Divider />
        <h3>Products</h3>
        <components.productList products={products} />
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  products: services.shopping.selector.getProducts(state)
})

export default connect(mapStateToProps)(component)
