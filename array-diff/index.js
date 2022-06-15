const arrayDiff = (a, b) => {
  for (let i = 0; i < b.length; i++) {
    a = a.filter(number => b[i] !== number)
  }

  return a
}
