<h1>Multiples of 3 or 5 <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/514b92a657cdc65150000006">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>ALGORITHMS</code>
</sup>

## Description

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 **below** the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

**Note:** If the number is a multiple of **both** 3 and 5, only count it _once_.

## Solution

```javascript
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
```
