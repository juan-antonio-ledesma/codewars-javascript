<h1>Array Helpers <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/525d50d2037b7acd6e000534">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: `square()`, `cube()`, `average()`, `sum()`, ` even()` and `odd()`.

Explanation:

- `square()` must return a copy of the array, containing all values squared
- `cube()` must return a copy of the array, containing all values cubed
- `average()` must return the average of all array values; on an empty array must return `NaN`
- `sum()` must return the sum of all array values
- `even()` must return an array of all even numbers
- `odd()` must return an array of all odd numbers

Note: the original array **must not** be changed in any case!

**Example**

```javascript
var numbers = [1, 2, 3, 4, 5]

numbers.square() // must return [1, 4, 9, 16, 25]
numbers.cube() // must return [1, 8, 27, 64, 125]
numbers.average() // must return 3
numbers.sum() // must return 15
numbers.even() // must return [2, 4]
numbers.odd() // must return [1, 3, 5]
```

## Solutions

```javascript
Object.assign(Array.prototype, {
  square() {
    return this.map(num => Math.pow(num, 2))
  },
  cube() {
    return this.map(num => Math.pow(num, 3))
  },
  sum() {
    return this.reduce((acc, num) => acc + num, 0)
  },
  average() {
    if (this.length === 0) return NaN

    return this.sum() / this.length
  },
  even() {
    return this.filter(num => num % 2 === 0)
  },
  odd() {
    return this.filter(num => num % 2 !== 0)
  },
})
```

---

```javascript
Array.prototype.square = function () {
  return this.map(num => Math.pow(num, 2))
}

Array.prototype.cube = function () {
  return this.map(num => Math.pow(num, 3))
}

Array.prototype.sum = function () {
  return this.reduce((acc, num) => acc + num, 0)
}

Array.prototype.average = function () {
  if (this.length === 0) return NaN

  return this.sum() / this.length
}

Array.prototype.even = function () {
  return this.filter(num => num % 2 === 0)
}

Array.prototype.odd = function () {
  return this.filter(num => num % 2 !== 0)
}
```
