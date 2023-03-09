<h1>Weight for weight <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/55c6126177c9441a570000cc">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example `99` will have "weight" `18`, `100` will have "weight" `1` so in the list 100 will come before `99`.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

**Example:**

```
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

"100 180 90 56 65 74 68 86 99"
```

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

`180` is before `90` since, having the same "weight" (9), it comes before as a _string_.

All numbers in the list are positive numbers and the list can be empty.

**Notes**

- it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
- For C: The result is freed.

## Solution

```javascript
const sumOfDigits = strNum => {
  return strNum.split('').reduce((acc, cur) => acc + Number(cur), 0)
}

const orderWeight = str => {
  const numbers = str.split(' ')

  const pairs = []
  numbers.forEach(strNum => {
    pairs.push({ sum: sumOfDigits(strNum), stringNumber: strNum })
  })

  const orderedPairs = pairs.sort((a, b) => {
    return a.sum === b.sum
      ? a.stringNumber.localeCompare(b.stringNumber)
      : a.sum - b.sum
  })

  const result = []
  orderedPairs.forEach(item => {
    result.push(item.stringNumber)
  })

  return result.join(' ')
}
```
