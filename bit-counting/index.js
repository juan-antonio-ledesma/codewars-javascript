const getBinary = num => {
  return num.toString(2)
}

const countBits = num => {
  const binaryNumber = getBinary(num)

  return binaryNumber.split('').reduce((acc, cur) => acc + Number(cur), 0)
}
