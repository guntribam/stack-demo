import React from 'react'
import { services, actionHub } from '../../loader'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

const buttonStyle = {
  margin: 12
}

class component extends React.PureComponent {
  state = {
    values: 0,
    ranges: [{'label': 'U$0 to unlimited', 'minValue': 0, 'maxValue': 999},
            {'label': 'U$0 to U$10', 'minValue': 0, 'maxValue': 10},
            {'label': 'U$10,01 to U$15', 'minValue': 10.01, 'maxValue': 15},
            {'label': 'U$15,01 to U$30', 'minValue': 15.01, 'maxValue': 30},
            {'label': 'U$30 to unlimited', 'minValue': 30, 'maxValue': 999}]
  }

  onFilterByCategory = (event, index, value) => {
    this.setState({value})
    if (value === 0) {
      this.props.filterByCategory('')
    }
    this.props.filterByCategory(this.props.categories[index - 1])
  }

  onFilterPriceRange = (range) => {
    this.props.filterByPrice(range)
  }

  render () {
    var { categories } = this.props
    if (categories && categories.length > 0) {
      var menuItems = categories.map((category, index) => (<MenuItem value={index + 1} key={index + 1} primaryText={category} />))
      var buttons = this.state.ranges.map((range, index) => (<RaisedButton label={range.label} key={index} style={buttonStyle} onClick={() => { this.onFilterPriceRange(range) }}/>))
      return (
        <div>
          <p>Filter by category</p>
          <SelectField
              floatingLabelText="Category"
              value={this.state.value}
              onChange={this.onFilterByCategory}>
              {menuItems}
          </SelectField>
          <p>Filter by price range</p>
          {buttons}
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
  filterByCategory: (category) => dispatch(actionHub.SHOPPING_FILTER_PRODUCT_BY_CATEGORY(category)),
  filterByPrice: (range) => dispatch(actionHub.SHOPPING_FILTER_PRODUCT_BY_PRICE_RANGE(range))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
