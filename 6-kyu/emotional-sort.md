<h1>Emotional Sort ( ︶︿︶) <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5a86073fb17101e453000258">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code> <code>SORTING</code>
</sup>

## Description

You'll have a function called "**sortEmotions**" that will return an array of **emotions** sorted. It has two parameters, the first parameter called "**array**" will expect an array of emotions where an emotion will be one of the following:

- **:D** -> Super Happy
- **:)** -> Happy
- **:|** -> Normal
- **:(** -> Sad
- **T_T** -> Super Sad

Example of the array: `[ 'T_T', ':D', ':|', ':)', ':(' ]`

And the second parameter is called "**order**", if this parameter is true then the order of the emotions will be descending (from **Super Happy** to **Super Sad**) if it's **false** then it will be ascending (from **Super** Sad to **Super Happy**)

Example if **order** is true with the above array: `[ ':D', ':)', ':|', ':(', 'T_T' ]`

- Super Happy -> Happy -> Normal -> Sad -> Super Sad

If **order** is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

- Super Sad -> Sad -> Normal -> Happy -> Super Happy

Example:

```
arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
```

Notes:

- The array could be empty, in that case return the same empty array
- All **emotions** will be valid

## Solution

```javascript
const emotions = {
  ':D': 5, // Super Happy
  ':)': 4, // Happy
  ':|': 3, // Normal
  ':(': 2, // Sad
  T_T: 1, // Super Sad
}

const sortEmotions = (array, order) => {
  return array.sort((a, b) => {
    if (order) return emotions[b] - emotions[a]
    return emotions[a] - emotions[b]
  })
}
```
