<h1>V A P O R C O D E <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5966eeb31b229e44eb00007a">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

**Note that spaces should be ignored in this case.**

**Examples**

```
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
```

## Solution

```javascript
const vaporcode = string => {
  return string.toUpperCase().replace(/\s/g, '').split('').join('  ')
}
```
