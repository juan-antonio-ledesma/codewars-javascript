<h1>Tail Swap <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5868812b15f0057e05000001">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

You'll be given a list of two strings, and each will contain exactly one colon (`":"`) in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

**Examples**

```
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
```

## Solution

```javascript
const tailSwap = arr => {
  const pair1 = arr[0].split(':')
  const pair2 = arr[1].split(':')

  return [`${pair1[0]}:${pair2[1]}`, `${pair2[0]}:${pair1[1]}`]
}ddBinary = (a, b) => (a + b).toString(2)
```
