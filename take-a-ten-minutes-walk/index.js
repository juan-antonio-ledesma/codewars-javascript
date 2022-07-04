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
