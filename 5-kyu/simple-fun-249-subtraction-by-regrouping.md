<h1>Simple Fun #249: Subtraction By Regrouping <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/590c3b1ff06c49a024000001">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>PUZZLES</code>
</sup>

## Description

**Task**

When subtracting integers by hand, you can use a strategy called regrouping. (This strategy is also sometimes called borrowing.)

In this strategy, corresponding digits are subtracted from each other one by one, from right to left, unless the digit of the minuend (the number being subtracted from) is smaller than the corresponding digit of the subtrahend (the number being subtracted).

In this case, you have to borrow 10 from the digit of the minuend immediately to the left of the current one. You can see an example of this method at work here.

When you subtract using regrouping, all the numbers that are being subtracted (the subtrahend) remain the same, while the numbers that are being subtracted from (the minuend) may change. Given two integers of the same length, return an array containing the numbers that are being subtracted from when performing subtraction by hand, from right to left.

**Input/Output**

`[input]` integer `minuend`

The number that the `subtrahend` is being subtracted from.

`1 ≤ minuend ≤ 10^9`.

`[input]` integer `subtrahend`

The number being subtracted from the `minuend`.

`1 ≤ subtrahend ≤ minuend`.

subtrahend is guaranteed to have the `same number of digits` as minuend.

`[output]` an integer array

An array containing the numbers that are being subtracted from when subtracting the subtrahend from the minuend using the regrouping strategy.

**Example**

For `minuend = 2024 and subtrahend = 1234`,

the output should be `[4, 12, 9, 1]`.

When subtracting 1234 from 2024, we actually consider the following pairs (going from right to left):

```
4 and 4; 12 (10 was borrowed from 0, temporarily making it equal to -1, and added to 2) and 3; 9 (again, 10 was borrowed from 2) and 2; 1 and 1.
```

## Solution

```javascript
const subtractionByRegrouping = (minuend, subtrahend) => {
  const numberOfDigits = String(minuend).length

  const subtract = minuend - subtrahend
  const numberOfDigitsSubtract = String(subtract).length

  const differenceNumberDigits = numberOfDigits - numberOfDigitsSubtract

  const subtrahendArray = String(subtrahend)
    .split('')
    .map(num => Number(num))
  const subtractArray = `${'0'.repeat(differenceNumberDigits)}${subtract}`
    .split('')
    .map(num => Number(num))

  const result = []

  for (let i = 0; i < numberOfDigits; i++) {
    const sum = subtrahendArray[i] + subtractArray[i]
    result.push(sum)
  }

  return result.reverse()
}
```
