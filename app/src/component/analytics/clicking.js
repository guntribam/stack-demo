
const defaultSelectors = ['a', 'button', 'input', 'textarea', 'option', 'video', 'audio', 'embed', 'object']

export default function setupClickingAnalytics (extraSelectors, ignoreDefaults) {
  var selectorArray = []

  if (extraSelectors !== undefined) {
    if (typeof extraSelectors === 'string') {
      selectorArray = extraSelectors.split(' ').filter(i => i !== '')
    } else if (extraSelectors instanceof Array) {
      selectorArray = extraSelectors
    }
  }

  if (!ignoreDefaults) {
    selectorArray = selectorArray.concat(defaultSelectors)
  }

  var selectors = new Selectors(selectorArray)

  window.onclick = function (event) {
    for (var element of event.path) {
      if (selectors.match(element)) {
        console.log(element)
        return true
      }
    }
    console.log(event)
    return true
  }
}

class Selectors {

  constructor (selectorArray) {
    this.tags = []
    this.cssClasses = []
    for (var selector of selectorArray) {
      if (selector.startsWith('.')) {
        this.cssClasses.push(selector.substr(1))
      } else {
        this.tags.push(selector.toLowerCase())
      }
    }
  }

  match (element) {
    var tagName = element.tagName
    if (!tagName) {
      // an element without tag name is the document element
      return false
    } else if (this.tags.includes(tagName.toLowerCase())) {
      return true
    }

    for (var cssClass of this.cssClasses) {
      if (element.classList.contains(cssClass)) {
        return true
      }
    }

    return false
  }

}

