<h1>Make a function that does arithmetic! <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

`a` and `b` will both be positive integers, and `a` will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few **examples:(Input1, Input2, Input3 --> Output)**

```
5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
```

Try to do it without using if statements!

## Solutions

```javascript
const arithmetic = (a, b, operator) => {
  const operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  }

  return operations[operator]
}
```

---

```javascript
const arithmetic = (a, b, operator) => {
  return operator === 'add'
    ? a + b
    : operator === 'subtract'
    ? a - b
    : operator === 'multiply'
    ? a * b
    : a / b
}
```
