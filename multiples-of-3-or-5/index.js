const solution = number => {
  if (number <= 0) return 0

  const setOfMultiples = new Set()

  for (let i = 0; i < Math.trunc(number / 3); i++) {
    const currentNumberMultipleOf3 = (i + 1) * 3
    const currentNumberMultipleOf5 = (i + 1) * 5

    if (currentNumberMultipleOf3 < number)
      setOfMultiples.add(currentNumberMultipleOf3)
    if (currentNumberMultipleOf5 < number)
      setOfMultiples.add(currentNumberMultipleOf5)
  }

  return [...setOfMultiples].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  )
}
