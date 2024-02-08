<h1>Fix string case <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5b180e9fedaa564a7000009a">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

- make as few changes as possible.
- if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

```
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
```

Good luck!

## Solutions

```javascript
const solve = str => {
  const uppercaseCount = (str.match(/[A-Z]/g) || []).length
  const lowercaseCount = str.length - uppercaseCount

  return uppercaseCount > lowercaseCount ? str.toUpperCase() : str.toLowerCase()
}
```

```javascript
const solve = str => {
  let uppercaseCount = 0
  let lowercaseCount = 0

  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase() ? uppercaseCount++ : lowercaseCount++
  }

  return uppercaseCount > lowercaseCount ? str.toUpperCase() : str.toLowerCase()
}
```
