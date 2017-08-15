import { makeActionHub, sharedServices, sharedComponents, sharedHelper } from '@gp-technical/stack-pack-app'
import { Box, FileUpload, Table } from '@gp-technical/stack-pack-components'
import localComponents from './component'
import localServices from './service'
import env from './env'

const services = {...localServices, ...sharedServices}
const actionHub = makeActionHub(services)

const components = {...localComponents, ...sharedComponents, ...{Box, FileUpload, Table}}
const helper = {...sharedHelper}

export { actionHub, env, components, services, helper }
