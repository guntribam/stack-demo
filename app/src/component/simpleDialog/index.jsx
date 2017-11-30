import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import { actionHub, services, components } from '../../loader'

class simpleDialog extends React.PureComponent {
  render () {
    const marginStyle = {
      marginLeft: 12
    }
    const { open, answer } = this.props
    const actions = [
      <RaisedButton
        label="Cancel"
        onClick={this.props.closeDialog}
        style={marginStyle}
      />,
      <RaisedButton
        label="Delete"
        secondary={true}
        style={marginStyle}
        onClick={this.props.delete}
      />,
      <RaisedButton
        label="Submit"
        primary={true}
        style={marginStyle}
        onClick={this.props.submit}
      />
    ]

    return (
      <components.Box>
        <h2>
          Feature: <i>Simple Dialog</i>
        </h2>
        <h2>Simple Dialog with straightforward actions</h2>
        <p>
          This a simple dialog feature that provides straightforward actions
          such as submit or delete....
        </p>
        <p>
          Data : {answer}
          <br />
          Dialog : {open === true ? 'Opened' : 'Closed'}
        </p>
        <RaisedButton
          label="Open Dialog"
          primary={true}
          onClick={this.props.openDialog}
        />
        <Dialog
          title="Dialog With Straightforward Actions"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.props.closeDialog}
        >
          <h1>Hello World</h1>
        </Dialog>
      </components.Box>
    )
  }
}

const mapStateToProps = state => ({
  open: services.simpleDialog.selector.getOpen(state),
  answer: services.simpleDialog.selector.getAnswer(state)
})

const mapDispatchToProps = dispatch => ({
  openDialog: () => dispatch(actionHub.SIMPLE_DIALOG_OPEN_DIALOG()),
  closeDialog: () => dispatch(actionHub.SIMPLE_DIALOG_CLOSE_DIALOG()),
  delete: () => dispatch(actionHub.SIMPLE_DIALOG_DELETE()),
  submit: () => dispatch(actionHub.SIMPLE_DIALOG_SUBMIT())
})

export default connect(mapStateToProps, mapDispatchToProps)(simpleDialog)
