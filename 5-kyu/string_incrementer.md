<h1>String incrementer <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54a91a4883a7de5d7800009c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>STRINGS</code>
</sup>

## Description

Your job is to write a function which increments a string, to create a new string.

- If the string already ends with a number, the number should be incremented by 1.
- If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

`foo -> foo1`

`foobar23 -> foobar24`

`foo0042 -> foo0043`

`foo9 -> foo10`

`foo099 -> foo100`

_Attention: If the number has leading zeros the amount of digits should be considered._

## Solution

```javascript
const getIndexFirstDigit = string => {
  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string[i]
    const isInteger = Number(currentCharacter) >= 0

    if (!isInteger) return i
  }
}

const incrementString = string => {
  const reverseString = string.split('').reverse().join('')

  const indexFirstDigit = getIndexFirstDigit(reverseString)

  const stringPart = string.slice(0, -indexFirstDigit)
  const stringNumericPart = string.slice(string.length - indexFirstDigit)
  const realNumericPart = Number(stringNumericPart) + 1

  if (stringNumericPart.length === 0) return `${string}1`

  const numberZerosLeft =
    stringNumericPart.length - String(realNumericPart).length

  let result = stringPart
  if (numberZerosLeft > 0) result += '0'.repeat(numberZerosLeft)
  result += realNumericPart

  return result
}
```
