<h1>Find the stray number <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57f609022f4d534f05000024">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ALGORITHMS</code>
</sup>

## Description

You are given an _odd-length_ array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

**The input array will always be valid!** (odd-length >= 3)

**Examples**

```
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
```

## Solutions

```javascript
const stray = numbers => {
  return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num))
}
```

```javascript
const isUnique = (number, array) => {
  return array.indexOf(number) === array.lastIndexOf(number)
}

const stray = numbers => {
  for (const number of numbers) {
    if (isUnique(number, numbers)) return number
  }
}
```
