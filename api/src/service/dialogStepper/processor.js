import { makeProcessor } from '@gp-technical/stack-pack-api'
import { sleep } from '@gp-technical/stack-pack-util'
import recase from './recase'

const processor = async action => {
  var { types, type, data } = action
  switch (type) {
    case types.dialogStepperSubmit:
      await sleep(5000)
      return recase.makeUpper(data)
  }
}

export default makeProcessor(processor)
