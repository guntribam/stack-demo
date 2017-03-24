import { makeProcessor } from '@gp-technical/stack-redux-api'
import index from './'

const processor = async (action) => {
  var {types, type, data} = action
  var {db} = index
  console.info('db', db)
  switch (type) {
    case types.counterIncrement:
      return db.total++
    case types.counterDecrement:
      return db.total--
    case types.counterGetTotal:
      return db.total
  }
}

export default makeProcessor(processor)
