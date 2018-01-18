import React from 'react'
import { connect } from 'react-redux'
import VisibilitySensor from 'react-visibility-sensor'
import { actionHub } from '../../loader'

export default function visibilityDetectable (target, name, descriptor) {
  console.log(target)
  console.log(target.prototype)

  target.prototype._wrappedRender = target.prototype.render
  target.prototype.render = decoratedRender
  return target

  function decoratedRender() {
    console.log(actionHub)
    return (
      <DecoratingComponent>
        {this._wrappedRender()}
      </DecoratingComponent>
    )
  }
}

const mapStateToProps = function(state) { return {} }

const mapDispatchToProps = dispatch => ({
  visible: () => dispatch(actionHub.ANALYTICS_COMPONENT_VISIBLE()),
  hidden:  () => dispatch(actionHub.ANALYTICS_COMPONENT_HIDDEN()),
})

@connect(mapStateToProps, mapDispatchToProps)
class DecoratingComponent extends React.PureComponent {

  render () {
    var onChange = (isVisible) => {
      if (isVisible) {
        this.props.visible()
      } else {
        this.props.hidden()
      }
      console.log('Element is now %s', isVisible ? 'visible' : 'hidden')
    }
    var container = document.getElementById('wrapper')

    return (
      <VisibilitySensor
          onChange={onChange}
          containment={container}
          scrollCheck={true}
          scrollThrottle={100}
          intervalDelay={8000}
          minTopValue={10}
          partialVisibility={true} >
        <div>
          {this.props.children}
        </div>
      </VisibilitySensor>
    )
  }
}

