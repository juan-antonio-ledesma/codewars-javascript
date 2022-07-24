# [Write Number in Expanded Form - 6 kyu](https://www.codewars.com/kata/5842df8ccbd22792a4000245)

```javascript
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
```
