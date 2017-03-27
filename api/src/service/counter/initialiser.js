import db from './db'

const initialiser = async () => {
  return {total: db.getTotal()}
}

export default initialiser
