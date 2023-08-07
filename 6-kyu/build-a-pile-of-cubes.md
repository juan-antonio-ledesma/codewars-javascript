<h1>Build a pile of Cubes <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5592e3bd57b64d00f3000047">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>ALGORITHMS</code>
</sup>

## Description

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of $n^3$, the cube above will have a volume of $(n-1)^3$, and so on until the top which will have a volume of $1^3$.

You are given the total volume m of the building. Can you find the number n of cubes you will have to build?

The parameter of the function `(find_nb, find-nb, findNb, ...)` will be an integer m, and you have to return the integer n such as: $n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m$ if such a n exists or -1 if there is no such n.

**Examples:**

findNb(1071225) --> 45

findNb(91716553919377) --> -1

## Solution

```javascript
const findNb = totalVolume => {
  let currentVolumeSum = 0
  let numberOfCubes = 0

  while (currentVolumeSum < totalVolume) {
    numberOfCubes++
    currentVolumeSum += Math.pow(numberOfCubes, 3)
  }

  return currentVolumeSum === totalVolume ? numberOfCubes : -1
}
```
