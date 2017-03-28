import React from 'react'
import { connect } from 'react-redux'
import { components, services } from './loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import { muiTheme } from './theme'
import styles from './index.scss'

class component extends React.PureComponent {
  render () {
    const {user} = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <components.App.Bar
            title='stack-demo'
            color={muiTheme.appBar.color}
            user={user}
            style={styles} />
          <Grid>
            <Row className={styles.main}>
              <Col
                xs={12}
                sm={12}
                md={8}
                lg={12}>
              <components.hello />
              <components.fetch />
              <components.counter />
              <components.errors />
              <components.thunks />
              <components.gp />
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => ({
  user: services.auth.selector.getProfile(state)
})

export default connect(mapStateToProps)(component)
