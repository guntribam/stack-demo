import React from 'react'
import { connect } from 'react-redux'
import { actionHub, services, components } from '../../loader'

class component extends React.PureComponent {

  render () {
    var {source, message} = this.props
    return (
      <components.Box>
        <h3>Hello World</h3>
        <b>Source</b>:
        <br/><i>{source}</i>
        <br/>
        <br/>
        <b>Message</b>:
        <br/>
        {message}
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  source: services.hello.selector.getSource(state),
  message: services.hello.selector.getMessage(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchMessage: () => dispatch(actionHub.HELLO_FETCH_MESSAGE())
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
