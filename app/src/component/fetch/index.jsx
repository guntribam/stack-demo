import React from 'react'
import { connect } from 'react-redux'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import { actionHub, services, components } from '../../loader'

const buttonStyle = {
  margin: 12
}

class component extends React.PureComponent {
  onFetchFromLocal = () => {
    this.props.fromLocal('This is the data that has been sourced locally.')
  }
  onFetchFromApi = () => {
    this.props.fromApi()
  }
  onReload = () => {
    window.location.reload()
  }
  render () {
    var {source, data} = this.props
    return (
      <components.Box>
        <h2>Fetching Data</h2>
        <p>
          This component shows the various ways data can be fetched. As initialisation data, from an API or locally.
        </p>
        <Divider />
        <h3>Data</h3>
        <ul>
          <li>
            <b>Source</b>
            <br/><i>{source}</i>
          </li>
          <li>
            <b>Data</b>
            <br/>
            {data}
          </li>
        </ul>
        <RaisedButton label='Fetch Data Locally' onClick={this.onFetchFromLocal} style={buttonStyle} />
        <RaisedButton label='Fetch Data from the API' onClick={this.onFetchFromApi} style={buttonStyle} />
        <RaisedButton label='Reload the Page' onClick={this.onReload} style={buttonStyle} />
        <Divider />
        <h3>Notes</h3>
        <b>Initialising the component with API sourced data</b>
        <p>
          At startup, the component's state can be initialised from the API. This is useful when you want to initialise your component state from a database or from a thrid
          party source. When this app starts current state of the this component (see above) is set to some Initial data. This data has come via the application API. Look
          for the 'initialiser.js' file for this component's API service. Initialising from the API is optional, you can always fall back to local REDUX state initialisation,
          via the reducer, or none at all.
        </p>
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  source: services.fetch.selector.getSource(state),
  data: services.fetch.selector.getData(state)
})

const mapDispatchToProps = (dispatch) => ({
  fromLocal: (data) => dispatch(actionHub.FETCH_FROM_LOCAL(data)),
  fromApi: () => dispatch(actionHub.FETCH_FROM_API())
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
