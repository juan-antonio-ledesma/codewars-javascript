<h1>The Hashtag Generator <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52449b062fb80683ec000024">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>ALGORITHMS</code>
</sup>

## Description

The marketing team is spending way too much time typing in hashtags.<br>
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (`#`).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return `false`.
- If the input or the result is an empty string it must return `false`.

## Solution

```javascript
const capitalize = str => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

const generateHashtag = str => {
  if (str === '' || str.trim() === '') return false

  const hashtag = `#${str
    .split(' ')
    .map(str => capitalize(str))
    .join('')}`

  return hashtag.length > 140 ? false : hashtag
}
```
