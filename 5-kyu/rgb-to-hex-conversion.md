<h1>RGB To Hex Conversion <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/513e08acc600c94f01000001">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

```javascript
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0, 0, 0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
```

## Solution

```javascript
const normalizeValue = num => {
  return num < 0 ? 0 : num > 255 ? 255 : num
}

const getHexPartialValue = num => {
  const hexPartialValue = num.toString(16).toUpperCase()
  return hexPartialValue.length === 1 ? `0${hexPartialValue}` : hexPartialValue
}

const rgb = (r, g, b) => {
  const rgbArray = [r, g, b]
  let hexValue = ''

  for (let i = 0; i < rgbArray.length; i++) {
    const currentValue = normalizeValue(rgbArray[i])
    hexValue += getHexPartialValue(currentValue)
  }

  return hexValue
}
```
