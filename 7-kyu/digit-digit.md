<h1>Digit*Digit <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/546e2562b03326a88e000020">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

## Solution

```javascript
const squareDigits = num => {
  const strNum = num.toString()
  const strArray = strNum.split('')
  const powNumArray = strArray.map(str => {
    const num = Number(str)
    return num * num
  })
  return Number(powNumArray.join(''))
}
```
