import { makeActionHub, sharedServices, sharedComponents } from '@gp-technical/stack-pack-app'
import { Box, FileUpload, Table } from '@gp-technical/stack-pack-components'
import localComponents from './component'
import localServices from './service'
import env from './env'

const services = {...localServices, ...sharedServices}
const stackComponets = {Box, FileUpload, Table}
const components = {...localComponents, ...sharedComponents, ...stackComponets}
console.info('components', components)
const actionHub = makeActionHub(services)

export { actionHub, env, components, services }
