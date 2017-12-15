const makeLower = data => {
  return {
    ...data,
    firstName: data.firstName.toLowerCase(),
    lastName: data.lastName.toLowerCase()
  }
}

export default { makeLower }
