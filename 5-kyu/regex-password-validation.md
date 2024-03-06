<h1>Regex Password Validation <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52e1476c8147a7547a000811">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

You need to write regex that will validate a password to make sure it meets the following criteria:

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a digit
- only contains alphanumeric characters (note that `'_'` is not alphanumeric)

## Solution

```javascript
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
```
