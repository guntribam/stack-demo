import { makeProcessor } from '@gp-technical/stack-pack-api'

const processor = async action => {
  var { types, type, data } = action

  switch (type) {
    case types.simpleDialogSubmit:
      return 'Data Submitted'
    case types.simpleDialogDelete:
      return 'Data Deleted'
  }
}

export default makeProcessor(processor)
