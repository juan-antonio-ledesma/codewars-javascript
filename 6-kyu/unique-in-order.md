<h1>Unique In Order <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54e6533c92449cc251001667">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

```
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

## Solution

```javascript
const uniqueInOrder = iterable => {
  const result = []

  for (let i = 0; i < iterable.length; i++) {
    const currentCharacter = iterable[i]
    const previousCharacter = iterable[i - 1]

    if (currentCharacter !== previousCharacter) result.push(currentCharacter)
  }

  return result
}
```
