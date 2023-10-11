<h1>IP Validation <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/515decfd9dcfc23bb6000006">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>ALGORITHMS</code>
</sup>

## Description

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between `0` and `255`, inclusive.

**Valid inputs examples:**

```
Examples of valid inputs:
1.2.3.4
123.45.67.89
```

**Invalid input examples:**

```
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
```

**Notes:**

- Leading zeros (e.g. `01.02.03.04`) are considered invalid
- Inputs are guaranteed to be a single string

## Solutions

```javascript
const isValidIP = ip => {
  const octets = ip.split('.')

  if (octets.length !== 4) return false

  for (const octet of octets) {
    const octetValue = Number(octet)

    if (isNaN(octetValue)) return false

    if (String(octetValue) !== octet) return false

    if (octetValue < 0 || octetValue > 255) return false
  }

  return true
}
```

```javascript
const isValidIP = ip => {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(ip)
}
```
