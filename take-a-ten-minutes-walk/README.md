# [Take a Ten Minutes Walk - 6 kyu](https://www.codewars.com/kata/54da539698b8a2ad76000228)

```javascript
const isValidWalk = walk => {
  const northDirectionBlocksTraveled = walk.filter(
    direction => direction === 'n',
  ).length

  const southDirectionBlocksTraveled = walk.filter(
    direction => direction === 's',
  ).length

  const eastDirectionBlocksTraveled = walk.filter(
    direction => direction === 'e',
  ).length

  const westDirectionBlocksTraveled = walk.filter(
    direction => direction === 'w',
  ).length

  return (
    walk.length === 10 &&
    northDirectionBlocksTraveled === southDirectionBlocksTraveled &&
    eastDirectionBlocksTraveled === westDirectionBlocksTraveled
  )
}
```
