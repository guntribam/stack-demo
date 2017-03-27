import { gpapi, makeProcessor } from '@gp-technical/stack-redux-api'

const processor = async (action) => {
  var {types, type, data} = action

  switch (type) {
    case types.gpGetDocuments:
      return await gpapi.get(`folder/${data}/items/simple`)
  }
}

export default makeProcessor(processor)
