<h1>Zero-plentiful Array <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/59e270da7997cba3d3000041">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

An array is called _zero-plentiful_ if it contains multiple zeros, and **every** sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is _zero-plentiful_, oherwise `0`.

**Examples**

```javascript
[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros
```

## Solution

```javascript
const zeroPlentiful = array => {
  const zerosGroups =
    array
      .map(number => (number === 0 ? 0 : 1))
      .join('')
      .match(/0+/g) || []

  return zerosGroups.every(group => group.length > 3) ? zerosGroups.length : 0
}
```
