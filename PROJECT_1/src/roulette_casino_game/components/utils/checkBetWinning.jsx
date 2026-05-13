const redNumbers = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
]

export const isRed = (number) => {
  return redNumbers.includes(number)
}

export const checkIfBetWon = (bet, spinResult) => {
  switch (bet.type) {
    case 'number':
      return bet.value === spinResult

    case 'color':
      if (bet.value === 'red') {
        return isRed(spinResult)
      }
      if (bet.value === 'black') {
        return !isRed(spinResult) && spinResult !== 0
      }

      return false

    case 'parity':
      if (bet.value === 'EVEN') {
        return spinResult !== 0 && spinResult % 2 === 0
      }
      if (bet.value === 'ODD') {
        return spinResult % 2 === 1
      }

      return false

    case 'range':
      if (bet.value === '1-18') {
        return spinResult >= 1 && spinResult <= 18
      }

      if (bet.value === '19-36') {
        return spinResult >= 19 && spinResult <= 36
      }

      return false

    case 'dozen':
      if (bet.value === '1-12') {
        return spinResult >= 1 && spinResult <= 12
      }
      if (bet.value === '13-24') {
        return spinResult >= 13 && spinResult <= 24
      }
      if (bet.value === '25-36') {
        return spinResult >= 25 && spinResult <= 36
      }

      return false

    case 'column':
      if (spinResult === 0) return false

      if (bet.value === '1ST') {
        return spinResult % 3 === 1
      }
      if (bet.value === '2ND') {
        return spinResult % 3 == 2
      }
      if (bet.value === '3RD') {
        return spinResult % 3 === 0
      }

      return false

    default:
      return false
  }
}
