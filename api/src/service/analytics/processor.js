import { makeProcessor } from '@gp-technical/stack-pack-api'
import db from './db'

const processor = async action => {
  var { types, type, data } = action
  if (type.endsWith("_RESPONSE")) return

  console.log({type, data})
}

export default makeProcessor(processor)
