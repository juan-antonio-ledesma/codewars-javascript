<h1>Extract the IDs from the data set <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5158bfce931c51b69b000001">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>ALGORITHMS</code>
</sup>

## Description

Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

```javascript
var data = {
  id: 1,
  items: [{ id: 2 }, { id: 3, items: [{ id: 4 }, { id: 5 }] }],
}

extractIds(data) // should return [1,2,3,4,5]
```

The method should be able to handle the case of empty data being passed in.

_Note:_ The only arrays that need to be traversed are those assigned to the "items" property.

## Solution

```javascript
const extractIds = data => {
  const ids = []
  const queue = [data]

  while (queue.length > 0) {
    let current = queue.shift()

    if (current.id) ids.push(current.id)

    if (current.items && Array.isArray(current.items)) {
      queue.unshift(...current.items)
    }
  }

  return ids
}
```
