<h1>Make the Deadfish Swim <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/51e0007c1f9378fa810002a9">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>PARSING</code> <code>ALGORITHMS</code>
</sup>

## Description

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

- `i` increments the value (initially `0`)
- `d` decrements the value
- `s` squares the value
- `o` outputs the value into the return array

Invalid characters should be ignored.

```javascript
parse("iiisdoso") => [ 8, 64 ]
```

## Solution

```javascript
const parse = data => {
  let currentValue = 0

  const result = []

  data.split('').forEach(command => {
    if (command === 'i') currentValue++
    if (command === 'd') currentValue--
    if (command === 's') currentValue = Math.pow(currentValue, 2)
    if (command === 'o') result.push(currentValue)
  })

  return result
}
```
