const makeUpper = data => {
  return {
    ...data,
    firstName: data.firstName.toUpperCase(),
    lastName: data.lastName.toUpperCase()
  }
}

export default { makeUpper }
