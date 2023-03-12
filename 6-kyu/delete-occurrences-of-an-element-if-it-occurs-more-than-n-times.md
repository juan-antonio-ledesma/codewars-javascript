<h1>Delete occurrences of an element if it occurs more than n times <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/554ca54ffa7d91b236000023">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>LISTS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

**Enough is enough!**

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most `N` times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to `N` times, without changing the order?

**Task**

Given a list and a number, create a new `list` that contains each number of list at most N times, without reordering.<br>
For example if the input number is `2`, and the input list is `[1,2,3,1,2,1,2,3]`, you take `[1,2,3,1,2]`, drop the next `[1,2]` since this would lead to `1` and `2` being in the result `3` times, and then take 3, which leads to `[1,2,3,1,2,3]`.
With list `[20,37,20,21]` and number 1, the result would be `[20,37,21]`.

## Solution

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
