<h1>Calculating with Functions <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNCTIONAL PROGRAMMING</code>
</sup>

## Description

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be **integer division**. For example, this should return `2`, not `2.666666...`:

```
eight(dividedBy(three()));
```

## Solution

```javascript
const zero = func => operate(func, 0)
const one = func => operate(func, 1)
const two = func => operate(func, 2)
const three = func => operate(func, 3)
const four = func => operate(func, 4)
const five = func => operate(func, 5)
const six = func => operate(func, 6)
const seven = func => operate(func, 7)
const eight = func => operate(func, 8)
const nine = func => operate(func, 9)

const plus = rightNumber => leftNumber => leftNumber + rightNumber
const minus = rightNumber => leftNumber => leftNumber - rightNumber
const times = rightNumber => leftNumber => leftNumber * rightNumber
const dividedBy = rightNumber => leftNumber =>
  Math.trunc(leftNumber / rightNumber)

const operate = (func, number) => (func ? func(number) : number)
```
