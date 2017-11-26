import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-pack-app'

const addItemToCard = makeTypes(name, ['addItemToCard'])

const actions = {...makeActions(addItemToCard, {local: true})}
const types = {...addItemToCard}

export { actions, types }
