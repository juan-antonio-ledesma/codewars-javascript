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
