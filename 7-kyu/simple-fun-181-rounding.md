<h1>Simple Fun #181: Rounding <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/58bccdf56f25ff6b6d00002f">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Round the given number `n` to the nearest multiple of `m`.

If `n` is exactly in the middle of 2 multiples of `m`, return n instead.

**Example**

For `n = 20, m = 3`, the output should be `21`.

For `n = 19, m = 3`, the output should be `18`.

For `n = 50, m = 100`, the output should be `50`.

**Input/Output**

- `[input]` integer `n`<br>
  `1 ≤ n < 10^9`.

- `[input]` integer `m`<br>
  `3 ≤ m < 109`.

- `[output]` an integer<br>

## Solution

```javascript
const rounding = (n, m) => {
  const lowerMultiple = n - (n % m)
  const upperMultiple = lowerMultiple + m

  if (n - lowerMultiple === upperMultiple - n) return n

  return n - lowerMultiple < upperMultiple - n ? lowerMultiple : upperMultiple
}
```
