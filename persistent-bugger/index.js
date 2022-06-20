const getMultiplication = number => {
  return String(number)
    .split('')
    .reduce(
      (multipliedNumber, currentNumber) =>
        multipliedNumber * Number(currentNumber),
    )
}

const persistence = number => {
  let counter = 0

  while (String(number).length > 1) {
    number = getMultiplication(number)
    counter++
  }

  return counter
}
