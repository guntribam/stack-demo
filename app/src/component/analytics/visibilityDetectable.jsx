import VisibilitySensor from 'react-visibility-sensor'

export default function visibilityDetectable (target, name, descriptor) {
  console.log('decorator arguments')
  console.log(target)
  console.log(target.prototype)
  console.log(name)
  console.log(descriptor)
  if (descriptor) {
    return descriptor
  } else {
    target.prototype._wrappedRender = target.prototype.render
    target.prototype.render = decoratedRender
    console.log(target)
    console.log(target.prototype)
    return target
  }
}

function decoratedRender () {
  var onChange = function (isVisible) {
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
        {this._wrappedRender()}
      </div>
    </VisibilitySensor>
  )
}

