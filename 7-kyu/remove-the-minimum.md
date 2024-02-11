<h1>Remove the minimum <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/563cf89eb4747c5fb100001b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>LISTS</code> <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

**The museum of incredible dull things**

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

**Task**

Given an array of integers, remove the smallest value. **Do not mutate the original array/list.** If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

**Examples**

```
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
```

## Solutions

```javascript
const removeSmallest = numbers => {
  const minNumber = Math.min(...numbers)

  const indexToRemove = numbers.indexOf(minNumber)

  return [
    ...numbers.slice(0, indexToRemove),
    ...numbers.slice(indexToRemove + 1),
  ]
}
```

```javascript
const removeSmallest = numbers => {
  const numbersCopy = [...numbers]

  const minNumber = Math.min(...numbersCopy)

  return numbersCopy.splice(numbersCopy.indexOf(minNumber), 1)
}
```
