<h1>The Office IV - Find a Meeting Room <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57f604a21bd4fe771b00009c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ARRAYS</code>
</sup>

## Description

Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

```
'X' --> busy
'O' --> empty
```

If all rooms are busy, return `"None available!"`

## Solution

```javascript
const meeting = x => (x.indexOf('O') < 0 ? 'None available!' : x.indexOf('O'))
```
