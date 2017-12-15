import { makeProcessor } from '@gp-technical/stack-pack-api'
import recase from './recase'

const processor = async action => {
  var { types, type, data } = action
  switch (type) {
    case types.dialogFormSubmit:
      return recase.makeLower(data)
  }
}

export default makeProcessor(processor)
