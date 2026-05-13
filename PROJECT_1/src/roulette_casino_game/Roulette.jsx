import React, { useState } from 'react'
import BetTable from './components/BetTable'
import Chips from './components/Chips'
import { isRed, checkIfBetWon } from './components/utils/checkBetWinning'
import './styles/style.css'

const Roulette = () => {
  const [selectedChip, setSelectedChip] = useState(10)
  const [bets, setBets] = useState([])
  const [spinResult, setSpinResult] = useState(null)
  const [balance, setBalance] = useState(1000)
  const [history, setHistory] = useState([])

  const placeBet = (type, value) => {
    if (balance < selectedChip) return
    setBalance((prev) => prev - selectedChip)
    setBets((prev) => [
      ...prev,
      {
        type,
        value,
        amount: selectedChip,
      },
    ])
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
