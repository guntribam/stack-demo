import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-pack-app'

const types = makeTypes(name, ['getVolume'])
const actions = makeActions(types, { local: false })

export { actions, types }
