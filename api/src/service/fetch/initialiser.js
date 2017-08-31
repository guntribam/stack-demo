const initialiser = async (user) => {
  return `This is the initial value for the data. It was sent by the stack-demo API, specifically the 'fetch' service initialiser, at startup.
  The user that has just logged in is ${user.firstname} ${user.lastname}`
}

export default initialiser
