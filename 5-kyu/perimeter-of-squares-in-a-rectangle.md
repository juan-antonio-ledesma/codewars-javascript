<h1>Perimeter of squares in a rectangle <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/559a28007caad2ac4e000083">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>ALGORITHMS</code>
</sup>

## Description

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : `4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80`

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

![Fibonacci sequence](http://i.imgur.com/EYcuB1wm.jpg)

**Hint:**

See Fibonacci sequence

**Ref:**

[http://oeis.org/A000045](http://oeis.org/A000045)

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

```
perimeter(5)  should return 80
perimeter(7)  should return 216
```

## Solution

```javascript
const getFibonacciSequence = number => {
  const sequence = [1]

  for (let i = 0; i < number; i++) {
    if (sequence.length === 1) {
      sequence.push(1)
    } else {
      sequence.push(
        sequence[sequence.length - 1] + sequence[sequence.length - 2],
      )
    }
  }

  return sequence
}

const perimeter = number => {
  const fibonacciSequence = getFibonacciSequence(number)

  const sumFibonacciSequence = fibonacciSequence.reduce(
    (acc, curr) => acc + curr,
    0,
  )

  return 4 * sumFibonacciSequence
}
```
