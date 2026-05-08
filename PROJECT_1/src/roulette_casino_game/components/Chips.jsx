import React, { useState } from 'react'
import '../styles/style.css'

const Chips = ({ spinResult, selectedNo, winner, setWinner }) => {
  const result = (value) => {
    if (spinResult && selectedNo && spinResult == selectedNo) {
      console.log('You Won!')
      setWinner(selectedNo)
    } else {
      console.log('You Lost!')
    }
  }

  return (
    <div>
      <div className='chips'>
        <div onClick={result} value='1' className='chip'>
          1
        </div>
        <div onClick={result} value='10' className='chip'>
          10
        </div>
        <div onClick={result} value='100' className='chip'>
          100
        </div>
        <div onClick={result} value='500' className='chip'>
          500
        </div>
        <p>{winner}</p>
      </div>
    </div>
  )
}

export default Chips
