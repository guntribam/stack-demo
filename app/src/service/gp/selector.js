import name from './name'

const get = state => {
  return state[name]
}

const getDocuments = state => {
  return get(state).documents
}

const getFolders = state => {
  return get(state).folders
}

export default { getDocuments, getFolders }
