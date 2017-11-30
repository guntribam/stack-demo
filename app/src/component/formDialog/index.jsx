import React from 'react'
import { connect } from 'react-redux'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import { actionHub, services, components } from '../../loader'

class formDialog extends React.PureComponent {
  state = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    errorMessages: {
      wordsError: 'Please only use letters',
      numericError: 'Please provide a number',
      urlError: 'Please provide a valid URL',
      emailError: 'Please provide a valid Email'
    }
  }

  onSubmit = () => {
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      email: this.state.email
    })
    this.props.submit()
  }
  handleChange = e => {
    if (e.target.name === 'firstName') {
      const value = e.target.value
      this.setState({ firstName: value })
    } else if (e.target.name === 'lastName') {
      const value = e.target.value
      this.setState({ lastName: value })
    } else if (e.target.name === 'age') {
      const value = e.target.value
      this.setState({ age: value })
    } else if (e.target.name === 'email') {
      const value = e.target.value
      this.setState({ email: value })
    }
  }

  handleState = e => {
    console.log(this.state)
  }

  enableButton = () => {
    this.setState({
      canSubmit: true
    })
  }

  disableButton = () => {
    this.setState({
      canSubmit: false
    })
  }

  notifyFormError = data => {
    console.error('Form error:', data)
  }

  render () {
    const marginStyle = {
      marginLeft: 12
    }
    const { open, submitted, form } = this.props
    const { wordsError, numericError, emailError } = this.state.errorMessages

    const actions = [
      <RaisedButton
        label="Cancel"
        onClick={this.props.closeDialog}
        style={marginStyle}
      />,
      <RaisedButton
        label="Submit"
        disabled={!this.state.canSubmit}
        primary={true}
        style={marginStyle}
        onClick={this.onSubmit}
      />
    ]

    return (
      <components.Box>
        <h2>
          Feature: <i>Form Dialog</i>
        </h2>
        <h2>Form Dialog with form actions</h2>
        <p>
          This a form dialog feature that provides form actions such as
          submit...
        </p>
        <p>
          Form : {submitted}
          <br />
          Dialog : {open === true ? 'Opened' : 'Closed'}
        </p>
        <p>
          First Name : {open === true ? <i>None</i> : this.state.firstName}
          <br />
          Last Name : {open === true ? <i>None</i> : this.state.lastName} <br />
          Age : {open === true ? <i>None</i> : this.state.age} <br />
          Email : {open === true ? <i>None</i> : this.state.email}
          <br />
          Data from API : {form}
        </p>
        <RaisedButton
          label="Open Form Dialog"
          disabled={open}
          primary={true}
          onClick={this.props.openDialog}
        />
        <RaisedButton
          label="Check State"
          style={marginStyle}
          onClick={this.handleState}
        />
        <Dialog
          title="Form Dialog"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.props.closeDialog}
        >
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.onSubmit}
            onInvalidSubmit={this.notifyFormError}
          >
            <h2>The Form</h2>
            <FormsyText
              hintText="First Name"
              floatingLabelText="First Name"
              name="firstName"
              required
              validations="isWords"
              validationError={wordsError}
              onBlur={this.handleChange}
            />
            <br />
            <FormsyText
              hintText="Last Name"
              floatingLabelText="Last Name"
              name="lastName"
              required
              validations="isWords"
              validationError={wordsError}
              onBlur={this.handleChange}
            />
            <br />
            <FormsyText
              hintText="Age"
              floatingLabelText="Age"
              name="age"
              onBlur={this.handleChange}
              required
              validations="isNumeric"
              validationError={numericError}
            />
            <br />
            <FormsyText
              hintText="Email"
              floatingLabelText="Email"
              name="email"
              required
              onBlur={this.handleChange}
              validations="isEmail"
              validationError={emailError}
            />
          </Formsy.Form>
        </Dialog>
      </components.Box>
    )
  }
}

const mapStateToProps = state => ({
  open: services.formDialog.selector.getOpen(state),
  submitted: services.formDialog.selector.getSubmitted(state),
  form: services.formDialog.selector.getForm(state)
})

const mapDispatchToProps = dispatch => ({
  openDialog: () => dispatch(actionHub.FORM_DIALOG_OPEN_DIALOG()),
  closeDialog: () => dispatch(actionHub.FORM_DIALOG_CLOSE_DIALOG()),
  delete: () => dispatch(actionHub.FORM_DIALOG_DELETE()),
  submit: () => dispatch(actionHub.FORM_DIALOG_SUBMIT())
})

export default connect(mapStateToProps, mapDispatchToProps)(formDialog)