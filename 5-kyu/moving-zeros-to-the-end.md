<h1>Moving Zeros To The End <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52597aa56021e91c93000cb0">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>SORTING</code> <code>ALGORITHMS</code>
</sup>

## Description

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```javascript
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']) // returns[(false, 1, 1, 2, 1, 3, 'a', 0, 0)]
```

## Solution

```javascript
const moveZeros = arr => {
  const arrayWithoutZeros = arr.filter(item => item !== 0)
  const arrayOfZeros = arr.filter(item => item === 0)

  return [...arrayWithoutZeros, ...arrayOfZeros]
}
```
