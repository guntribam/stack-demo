import makeProcessor from '@gp-technical/stack-pack-makeProcessor'
import db from './db'

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
