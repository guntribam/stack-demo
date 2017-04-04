import { makeProcessor } from '@gp-technical/stack-redux-api'

const processor = async (action) => {
  var {types, type, data} = action

  switch (type) {
    case types.fetchFromApi:
      return 'Hello from the stack-demo API'
  }
}

export default makeProcessor(processor)
