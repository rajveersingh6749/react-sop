import React, { useState } from 'react'
import BetTable from './components/BetTable'
import './styles/style.css'
import Chips from './components/Chips'

const Roulette = () => {
  const [spinResult, setSpinResult] = useState(null)
  const [selectedNo, setSelectedNo] = useState(null)
  const [chip, setChip] = useState(null)
  const [winner, setWinner] = useState(null)

  return (
    <div className='roulette'>
      <h1>Roulette Casino Game</h1>

      <BetTable
        spinResult={spinResult}
        setSpinResult={setSpinResult}
        selectedNo={selectedNo}
        setSelectedNo={setSelectedNo}
        chip={chip}
        setChip={setChip}
      />
      <Chips
        spinResult={spinResult}
        selectedNo={selectedNo}
        winner={winner}
        setWinner={setWinner}
      />
    </div>
  )
}

export default Roulette
