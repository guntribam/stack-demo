import { makeActionHub, sharedServices, sharedComponents } from '@gp-technical/stack-redux-app'
import localComponents from './component'
import localServices from './service'
import env from './env'

const services = {...localServices, ...sharedServices}

const components = {...localComponents, ...sharedComponents}
const actionHub = makeActionHub(services)

export { actionHub, env, components, services }
