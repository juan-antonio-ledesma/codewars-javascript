<h1>Selective Array Reversing <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/58f6000bc0ec6451960000fd">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code> <code>LOGIC</code> <code>ARRAYS</code>
</sup>

## Description

Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

E.g

```javascript
selReverse([1, 2, 3, 4, 5, 6], 2)
//=> [2,1, 4,3, 6,5]
```

if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

```javascript
selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)
//=> [6,4,2, 12,10,8, 16,14]
```

`selReverse(array, length)`

- array - array to reverse
- length - length of each portion to reverse

Note: if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.

## Solution

```javascript
const selReverse = (array, portionLength) => {
  if (portionLength === 0) return array

  const result = []

  for (let i = 0; i < array.length; i += portionLength) {
    const currentPortionReversed = array.slice(i, i + portionLength).reverse()

    result.push(currentPortionReversed)
  }

  return result.flat()
}
```
