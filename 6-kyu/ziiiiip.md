<h1>Ziiiiip! <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5298ad7cd0f550269500051b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Let's implement the zipObject function that enables such results

```javascript
zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }
```

The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

```javascript
zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
```

If neither keys nor values are specified, then return {}

```
zipObject()
{}
```

## Solution

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
