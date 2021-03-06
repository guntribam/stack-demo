import calculator from './calculator'

const initialiser = async () => {
  const radius = 6372
  return {
    radius,
    volume: calculator.getVolume(radius)
  }
}

export default initialiser
