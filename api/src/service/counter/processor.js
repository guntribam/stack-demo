import api from '@gp-technical/stack-pack-api'
import { makeProcessor } from '@gp-technical/stack-pack-api'
import db from './db'

console.info('makeProcessor', makeProcessor)
console.info('api.makeProcessor', api.makeProcessor)

const processor = async (action) => {
  var {types, type, data} = action
  switch (type) {
    case types.counterIncrement:
      db.increment()
      return {total: db.getTotal()}
    case types.counterDecrement:
      db.decrement()
      return {total: db.getTotal()}
    case types.counterGetTotal:
      return {total: db.getTotal()}
  }
}

export default makeProcessor(processor)
