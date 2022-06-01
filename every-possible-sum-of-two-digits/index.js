const digits = num => {
  let digits = num
    .toString()
    .split('')
    .map(character => Number(character))
  let digitsLength = digits.length
  let result = []

  for (let i = 0; i < digitsLength; i++) {
    const currentNumber = digits[0]
    digits.shift()
    let sumArray = digits.map(number => number + currentNumber)
    result.push(sumArray)
  }

  return result.reduce((a, b) => a.concat(b))
}
