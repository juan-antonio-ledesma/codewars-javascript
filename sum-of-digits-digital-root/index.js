const getSum = number => {
  return String(number)
    .split('')
    .reduce(
      (totalAdded, currentNumber) => totalAdded + Number(currentNumber),
      0,
    )
}

const digital_root = number => {
  while (String(number).length > 1) {
    number = getSum(number)
  }

  return number
}
