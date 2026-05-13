import React, { useEffect, useState } from 'react'
import BetTable from './components/BetTable'
import Chips from './components/Chips'
import './styles/style.css'

const Roulette = () => {
  const [selectedChip, setSelectedChip] = useState(10)
  const [bets, setBets] = useState([])
  const [spinResult, setSpinResult] = useState(null)
  const [balance, setBalance] = useState(1000)
  const [history, setHistory] = useState([])

  useEffect(() => {
    bets.forEach((bet) => {
      console.log('All Bets: ', bets)
      console.log('Your bet: ', bet.value)
    })
  }, [bets])

  const placeBet = (type, value) => {
    if (balance < selectedChip) return
    setBalance((prev) => prev - selectedChip)
    // console.log(bets[bets.length - 1])
    setBets((prev) => [
      ...prev,
      {
        type,
        value,
        amount: selectedChip,
      },
    ])
  }

  const redNumbers = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ]

  const isRed = (number) => {
    return redNumbers.includes(number)
  }

  const checkIfBetWon = (bet, spinResult) => {
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
        if (bet.value === '1ST') {
          return [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34].includes(
            spinResult,
          )
        }
        if (bet.value === '2ND') {
          return [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].includes(
            spinResult,
          )
        }
        if (bet.value === '3RD') {
          return [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].includes(
            spinResult,
          )
        }

        return false

      default:
        return false
    }
  }

  return (
    <div className='roulette'>
      <h1>Roulette Casino Game</h1>

      <BetTable
        spinResult={spinResult}
        setSpinResult={setSpinResult}
        setSelectedChip={setSelectedChip}
        setBets={setBets}
        bets={bets}
        placeBet={placeBet}
        checkIfBetWon={checkIfBetWon}
        isRed={isRed}
        balance={balance}
        setBalance={setBalance}
        history={history}
        setHistory={setHistory}
      />
      <Chips setSelectedChip={setSelectedChip} />
    </div>
  )
}

export default Roulette
