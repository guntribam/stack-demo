import index from './'

const initialiser = async () => {
  const {db} = index
  return db.total
}

export default initialiser
