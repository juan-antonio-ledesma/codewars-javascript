# [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4) · 6 kyu

```javascript
const getBinary = num => {
  return num.toString(2)
}

const countBits = num => {
  const binaryNumber = getBinary(num)

  return binaryNumber.split('').reduce((acc, cur) => acc + Number(cur), 0)
}
```
