<h1>isAN(value) <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5656b6906de340bd1b0000ac">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

`isNaN` doesn't work very well. We want us to tell us whether the value or object we're dealing with is a number or not. Instead, it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called `isAN`, for `is A Number`. If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.

## Solution

```javascript
const isAN = value => {
  return (value instanceof Number || typeof value === 'number') && !isNaN(value)
}
```
