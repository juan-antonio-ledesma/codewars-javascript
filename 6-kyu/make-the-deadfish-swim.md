# [Make the Deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9) · 6 kyu

```javascript
const parse = data => {
  let currentValue = 0

  const result = []

  data.split('').forEach(command => {
    if (command === 'i') currentValue++
    if (command === 'd') currentValue--
    if (command === 's') currentValue = Math.pow(currentValue, 2)
    if (command === 'o') result.push(currentValue)
  })

  return result
}
```
