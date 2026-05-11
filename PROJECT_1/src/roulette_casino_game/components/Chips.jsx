import React, { useState } from 'react'
import '../styles/style.css'

const Chips = ({ chip, setChip }) => {
  const getChipValue = (value) => {
    console.log('Chips Value: ', value)
    setChip(value)
  }

  return (
    <div>
      <div className='chips'>
        <div onClick={() => getChipValue(1)} className='chip'>
          1
        </div>
        <div onClick={() => getChipValue(10)} className='chip'>
          10
        </div>
        <div onClick={() => getChipValue(100)} className='chip'>
          100
        </div>
        <div onClick={() => getChipValue(500)} className='chip'>
          500
        </div>
      </div>
    </div>
  )
}

export default Chips
