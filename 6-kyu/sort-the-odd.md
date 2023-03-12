<h1>Sort the odd <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/578aa45ee9fd15ff4600090d">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ARRAYS</code> <code>SORTING</code>
</sup>

## Description

**Task**

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

**Examples**

```
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
```

## Solution

```javascript
const sortArray = array => {
  const oddNumbersSorted = array
    .filter(number => number % 2 !== 0)
    .sort((a, b) => a - b)

  let oddPlaced = 0

  return array.map(number => {
    if (number % 2 === 0) return number

    return oddNumbersSorted[oddPlaced++]
  })
}
```
