<h1>Alphabetical Addition <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5d50e3914861a500121e1958">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

**Notes:**

- Letters will always be lowercase.
- Letters can overflow (see second to last example of the description)
- If no letters are given, the function should return `'z'`

**Examples:**

```javascript
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
```

## Solution

```javascript
const addLetters = (...letters) => {
  // console.log('a'.charCodeAt(0) - 96) --> 1
  // console.log(String.fromCharCode(1 + 96)) --> 'a'
  // ...
  // console.log('z'.charCodeAt(0) - 96) --> 26
  // console.log(String.fromCharCode(26 + 96)) --> 'z'

  const sum = letters.reduce((accumulator, currentValue) => {
    const newAccumulator = accumulator + currentValue.charCodeAt(0) - 96
    return newAccumulator > 26 ? newAccumulator - 26 : newAccumulator
  }, 0)

  return letters.length === 0 ? 'z' : String.fromCharCode(sum + 96)
}
```
