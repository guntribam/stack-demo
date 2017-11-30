import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import { services, actionHub } from '../../loader'
import { connect } from 'react-redux'

class component extends React.PureComponent {

  onFilterByCategory = (category) => {
    console.log(category)
    this.props.filterByCategory(category)
    // TODO when search is called , print the button for buttonStyleHightlighted
  }

  render () {
    var { categories } = this.props
    if (categories && categories.length > 0) {
      return (
        <div>
          {categories.map((category, index) => (
            <FlatButton key={index}
              label={category}
              onClick={() => this.onFilterByCategory(category)}/>
          ))}
        </div>
      )
    } else {
      return (<div> No categories on the store </div>)
    }
  }
}
const mapStateToProps = (state) => ({
  categories: services.shopping.selector.getCategories(state)
})

const mapDispatchToProps = (dispatch) => ({
  filterByCategory: (category) => dispatch(actionHub.SHOPPING_FILTER_PRODUCT_BY_CATEGORY(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
