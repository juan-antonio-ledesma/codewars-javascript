<h1>Write Number in Expanded Form <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5842df8ccbd22792a4000245">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>MATHEMATICS</code> <code>ALGORITHMS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

You will be given a number and you will need to return it as a string in [Expanded Form](https://www.mathsisfun.com/definitions/expanded-notation.html). For example:

```javascript
expandedForm(12) // Should return '10 + 2'
expandedForm(42) // Should return '40 + 2'
expandedForm(70304) // Should return '70000 + 300 + 4'
```

NOTE: All numbers will be whole numbers greater than 0.

## Solution

```javascript
const expandedForm = number => {
  const numberToString = String(number)
  const numberOfDigits = numberToString.length

  const result = []
  for (let i = 0; i < numberOfDigits; i++) {
    const currentDigit = numberToString[i]

    if (currentDigit === '0') continue

    result.push(`${currentDigit}${'0'.repeat(numberOfDigits - i - 1)}`)
  }

  return result.join(' + ')
}
```
