# [Delete occurrences of an element if it occurs more than n times](https://www.codewars.com/kata/554ca54ffa7d91b236000023) · 6 kyu

```javascript
const deleteNth = (arr, n) => {
  const counter = {}

  const solution = []

  arr.forEach(number => {
    counter[number] = counter[number] ? counter[number] + 1 : 1

    const repetitionsCurrentNumber = counter[number]

    if (repetitionsCurrentNumber <= n) solution.push(number)
  })

  return solution
}
```
