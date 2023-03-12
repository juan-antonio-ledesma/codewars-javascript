<h1>The Deaf Rats of Hamelin <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/598106cb34e205e074000031">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>STRINGS</code> <code>ALGORITHMS</code> <code>QUEUES DATA</code> <code>STRUCTURES</code>
</sup>

## Description

**Story**

The [Pied Piper](https://en.wikipedia.org/wiki/Pied_Piper_of_Hamelin) has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

**Kata Task**

How many deaf rats are there?

**Legend**

`P` = The Pied Piper
`O~` = Rat going left
`~O` = Rat going right

**Example**

ex1 `~O~O~O~O P` has 0 deaf rats

ex2 `P O~ O~ ~O O~` has 1 deaf rat

ex3 `~O~O~O~OP~O~OO~` has 2 deaf rats

## Solution

```javascript
const piedPiper = 'P'
const ratGoingLeft = 'O~'
const ratGoingRight = '~O'

const removeBlankSpaces = string => string.replace(/\s/g, '')

const addASpaceEveryTwoCharacters = string => {
  if (string === '') return ''
  return string.match(/.{1,2}/g).join(' ')
}

const getDeafRats = (rats, rat) => {
  const regularExpresion = new RegExp(rat, 'g')
  return (rats.match(regularExpresion) || []).length
}

const countDeafRats = town => {
  const rats = removeBlankSpaces(town).split(piedPiper)

  const ratsLeft = addASpaceEveryTwoCharacters(rats[0])
  const ratsRight = addASpaceEveryTwoCharacters(rats[1])

  const deafRatsLeft = getDeafRats(ratsLeft, ratGoingLeft)
  const deafRatsRight = getDeafRats(ratsRight, ratGoingRight)

  return deafRatsLeft + deafRatsRight
}
```
