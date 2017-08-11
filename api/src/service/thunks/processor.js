import {makeProcessor} from '@gp-technical/stack-pack-api'

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const processor = async (action) => {
  var {types, type, data} = action
  switch (type) {
    case types.thunksGetAnswer:
      await sleep(3000)
      return {answer: 42}
  }
}

export default makeProcessor(processor)
