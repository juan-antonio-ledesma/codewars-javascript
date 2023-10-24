<h1>CamelCase Method <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/587731fda577b3d1b0001196">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ALGORITHMS</code> <code>STRINGS</code>
</sup>

## Description

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

**Examples (input --> output):**

```
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
```

## Solution

```javascript
String.prototype.camelCase = function () {
  const capitalize = word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return this.split(' ').map(capitalize).join('')
}
```
