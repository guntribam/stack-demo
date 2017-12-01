import React from 'react'
import { services, actionHub } from '../../loader'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class component extends React.PureComponent {
  state = {
    values: 0
  }

  onFilterByCategory = (event, index, value) => {
    this.setState({value})
    if (value === 0) {
      this.props.filterByCategory('')
    }
    this.props.filterByCategory(this.props.categories[index - 1])
  }

  handleChange = (event, index, value) => this.setState({value});

  render () {
    var { categories } = this.props
    if (categories && categories.length > 0) {
      return (
        <div>
          <SelectField
            floatingLabelText="Category"
            value={this.state.value}
            onChange={this.onFilterByCategory}>
            <MenuItem value={0} primaryText='All'/>
            {categories.map((category, index) =>
              (<MenuItem value={index + 1} key={index + 1} primaryText={category} />))}
          </SelectField>
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
