import React from 'react'
import { connect } from 'react-redux'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import { env, actionHub, services, components } from '../../loader'

const buttonStyle = {
  margin: 12
}

const url = (path) => {
  return `${env.apiUrl}/rest/counter/${path}`
}

class component extends React.PureComponent {
  onIncrementRedux = () => {
    this.props.increment()
  }
  onDecrementRedux = () => {
    this.props.decrement()
  }
  onGetTotalRedux = () => {
    this.props.getTotal()
  }
  onIncrementRest = () => {
    window.open(url('increment'), '_blank')
  }
  onDecrementRest = () => {
    window.open(url('decrement'), '_blank')
  }
  onGetTotalRest = () => {
    window.open(url('total'), '_blank')
  }
  render () {
    var {total} = this.props

    return (
      <components.Box>
        <h2>Working with this Features's API Service</h2>
        <h3>A Simple, Server-Side Counter</h3>
        <p>
          This `counter` component demonstrates how to update your application state by making requests to the application's API. This achieved by dispatching REDUX actions,
          which the the stack will auto-broadcast to the API, and then listening for the corresponding API response.
        </p>
        <p>
          It also shows how to expose selected aspects of the component's server-side API service though REST endpoints. This techniqueallows your API services to be both
          tightly coupled to your application via a websocket <i>and</i> conditonally exposed to third parties via REST.
        </p>
        <Divider />
        <h1>Total = {total}</h1>
        <Divider />
        <h3>Dispatch REDUX Actions</h3>
        <RaisedButton label='Increment ++' onClick={this.onIncrementRedux} style={buttonStyle} />
        <RaisedButton label='Decrement --' onClick={this.onDecrementRedux} style={buttonStyle} />
        <RaisedButton label='Get Total' onClick={this.onGetTotalRedux} style={buttonStyle} />
        <Divider />
        <h3>Access the Equivalent REST Endpoints</h3>
        <ul>
          <li>
            <a href='#' onClick={this.onIncrementRest}>Increment</a>
          </li>
          <li>
            <a href='#' onClick={this.onDecrementRest}>Decrement</a>
          </li>
          <li>
            <a href='#' onClick={this.onGetTotalRest}>Get Total</a>
          </li>
        </ul>
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  total: services.counter.selector.getTotal(state)
})

const mapDispatchToProps = (dispatch) => ({
  getTotal: () => dispatch(actionHub.COUNTER_GET_TOTAL()),
  increment: () => dispatch(actionHub.COUNTER_INCREMENT()),
  decrement: () => dispatch(actionHub.COUNTER_DECREMENT())
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
