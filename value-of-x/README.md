# [Value of x - 5 kyu](https://www.codewars.com/kata/614ac445f13ead000f91b4d0)

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
