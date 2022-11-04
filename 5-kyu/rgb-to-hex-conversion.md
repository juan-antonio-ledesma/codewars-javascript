# [RGB To Hex Conversion](https://www.codewars.com/kata/513e08acc600c94f01000001) · 5 kyu

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
