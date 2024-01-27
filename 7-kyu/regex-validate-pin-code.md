<h1>Regex validate PIN code <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/55f8a9c06c018a0d6e000132">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

**Examples (Input --> Output)**

```
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
```

## Solution

```javascript
const validatePIN = pin => {
  if (pin.length === 4 || pin.length === 6) {
    return /^\d+$/.test(pin)
  }

  return false
}
```
