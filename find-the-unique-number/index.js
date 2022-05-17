const findUniq = arr => {
  const firstThreeNumbersOrdered = arr.slice(0, 3).sort((a, b) => a - b)
  const repeatedNumber =
    firstThreeNumbersOrdered[1] === firstThreeNumbersOrdered[2]
      ? firstThreeNumbersOrdered[2]
      : firstThreeNumbersOrdered[0]

  return arr.filter(number => number != repeatedNumber)[0]
}
