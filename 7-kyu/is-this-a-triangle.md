<h1>Is this a triangle? <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/56606694ec01347ce800001b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

## Solution

```javascript
const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a
```
