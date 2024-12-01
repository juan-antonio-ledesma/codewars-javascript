<h1>Matrix creation <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5a34da5dee1aae516d00004a">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ARRAYS</code> <code>MATRIX</code> <code>LINEAR ALGEBRA</code> <code>MATHEMATICS</code> <code>LANGUAGE FEATURES</code>

</sup>

## Description

Create an identity matrix of the specified size( >= 0).

Some examples:

```
(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]
```

## Solution

```javascript
const getMatrix = number => {
  const result = []

  for (let i = 0; i < number; i++) {
    const subArray = Array(number).fill(0)
    subArray[i] = 1

    result.push(subArray)
  }

  return result
}
```
