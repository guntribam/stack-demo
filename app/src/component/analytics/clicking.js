
const defaultSelectors = ['a', 'button', 'input', 'textarea', 'option', 'video', 'audio', 'embed', 'object']

export default function setupClickingAnalytics () {
  window.onclick = function (event) {
    for (var element of event.path) {
      if (defaultSelectors.includes(element.tagName.toLowerCase())) {
        console.log(element)
        return
      }
    }
    console.log(event)
    return true
  }
}

