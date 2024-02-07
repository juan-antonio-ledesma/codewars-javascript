<h1>Find the middle element <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/545a4c5a61aa4c6916000755">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

```
gimme([2, 3, 1]) => 0
```

_2_ is the number that fits between _1_ and _3_ and the index of _2_ in the input array is _0_.

Another example (just to make sure it is clear):

```
gimme([5, 10, 14]) => 1
```

_10_ is the number that fits between _5_ and _14_ and the index of 10 in the input array is _1_.

## Solution

```javascript
const gimme = triplet => {
  const sortedArray = [...triplet].sort((a, b) => a - b)

  const middleElement = sortedArray[1]

  return triplet.indexOf(middleElement)
}
```
