const isEven = number => number % 2 === 0

const findOutlier = integers => {
  let evenCounter = 0

  for (let i = 0; i < 3; i++) {
    const currentNumber = integers[i]

    if (isEven(currentNumber)) evenCounter++
  }

  return evenCounter >= 2
    ? integers.filter(number => !isEven(number))[0]
    : integers.filter(number => isEven(number))[0]
}
