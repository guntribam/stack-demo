import { makeProcessor } from '@gp-technical/stack-pack-api'

const processor = async action => {
  var { types, type, data } = action
  switch (type) {
    case types.formDialogSubmit:
      return 'Submitted'
  }
}

export default makeProcessor(processor)
