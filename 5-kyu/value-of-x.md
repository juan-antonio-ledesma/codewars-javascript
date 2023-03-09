<h1>Value of x <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/614ac445f13ead000f91b4d0">
    <strong>LINK TO KATA</strong>
  </a> - <code>STRINGS</code> <code>ALGORITHMS</code>
</sup>

## Description

Jack's teacher gave him a ton of equations for homework. The thing is they are all kind of same so they are boring.

So help him by making a equation solving function that will return the value of x.

Test Cases will be like this:

```
# INPUT            # RETURN
'x + 1 = 9 - 2'    # 6
'- 10 = x'         # -10
'x - 2 + 3 = 2'    # 1
'- x = - 1'        # 1
```

- All test cases are valid.
- Every `+`, `-` and numbers will be separated by space.
- There will be only one `x` either on the left or right.
- `x` can have a `-` mark before it.
- returned object will be a integer.

## Solution

```javascript
const reverseSigns = array => array.map(number => Number(number) * -1)

const sum = array => {
  return array.reduce(
    (previousValue, currentValue) => previousValue + Number(currentValue),
    0,
  )
}

const valueOfX = equation => {
  const isXInLeftSide = equation.split('=')[0].includes('x')

  const splitEquation = equation
    .replace('x', '0')
    .replace(/\+ /g, '')
    .replace(/- /g, '-')
    .split(' = ')

  const leftSide = splitEquation[0].split(' ')
  const rightSide = splitEquation[1].split(' ')

  let leftSum = 0
  let rightSum = 0

  if (isXInLeftSide) {
    leftSum = sum(reverseSigns(leftSide))
    rightSum = sum(rightSide)
  } else {
    leftSum = sum(leftSide)
    rightSum = sum(reverseSigns(rightSide))
  }

  return equation.includes('- x')
    ? (leftSum + rightSum) * -1
    : leftSum + rightSum
}
```
