const expandedForm = number => {
  const numberToString = String(number)
  const numberOfDigits = numberToString.length

  const result = []
  for (let i = 0; i < numberOfDigits; i++) {
    const currentDigit = numberToString[i]

    if (currentDigit === '0') {
      continue
    } else {
      result.push(`${currentDigit}${'0'.repeat(numberOfDigits - i - 1)}`)
    }
  }

  return result.join(' + ')
}
