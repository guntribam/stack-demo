import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-pack-app'

const api = makeTypes(name, ['submit'])
const local = makeTypes(name, ['open', 'close', 'previous', 'next'])

const actions = {
  ...makeActions(api, { local: false }),
  ...makeActions(local, { local: true })
}
const types = { ...api, ...local }

export { actions, types }
