# [Ziiiiip!](https://www.codewars.com/kata/5298ad7cd0f550269500051b) · 6 kyu

```javascript
const zipObject = (keys, values) => {
  const concatenatedFlattenedKeysValues = keys.concat(values).flat(Infinity)
  const finalKeys = concatenatedFlattenedKeysValues.filter(
    item => typeof item === 'string',
  )
  const finalValues = concatenatedFlattenedKeysValues.filter(
    item => typeof item === 'number',
  )

  const result = {}

  for (let i = 0; i < finalKeys.length; i++) {
    result[finalKeys[i]] = finalValues[i]
  }

  return result
}
```
