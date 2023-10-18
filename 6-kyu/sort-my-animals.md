<h1>Sort My Animals <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>LISTS</code> <code>SORTING</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Consider the following class:

```javascript
var Animal = {
  name: 'Cat',
  numberOfLegs: 4,
}
```

Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.

## Solution

```javascript
const compareAnimals = (a, b) => {
  if (a.numberOfLegs < b.numberOfLegs) return -1
  if (a.numberOfLegs > b.numberOfLegs) return 1

  if (a.name < b.name) return -1
  if (a.name > b.name) return 1

  return 0
}

const sortAnimal = animals => {
  if (animals.length === 0) return []

  const animalsCopy = [...animals]

  return animalsCopy.sort(compareAnimals)
}
```
