<h1>Split Strings <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/515de9ae9dcfc28eb6000001">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>STRINGS</code> <code>ALGORITHMS</code>
</sup>

## Description

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

Examples:

```
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
```

## Solution

```javascript
const solution = str => {
  if (str === '') return []

  let string = str
  const stringLength = str.length
  const result = []

  if (stringLength % 2 !== 0) string = `${str}_`

  for (let i = 0; i < Math.ceil(stringLength / 2); i++) {
    result.push(`${string[i * 2]}${string[i * 2 + 1]}`)
  }

  return result
}
```
