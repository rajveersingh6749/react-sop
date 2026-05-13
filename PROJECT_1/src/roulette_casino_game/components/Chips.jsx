import React from 'react'
import '../styles/style.css'

const Chips = ({ selectedChip, setSelectedChip }) => {
  const chipValues = [1, 10, 100, 500]

  // const getChipValue = (value) => {
  //   setSelectedChip(value)
  // }

  return (
    <div>
      <div className='chips'>
        {chipValues.map((value) => (
          <button
            key={value}
            onClick={() => setSelectedChip(value)}
            className={`chip ${selectedChip === value ? 'active_chip' : ''}`}
          >
            ${value}
          </button>
        ))}
        {/* <div onClick={() => getChipValue(1)} className='chip'>
          $1
        </div>
        <div onClick={() => getChipValue(10)} className='chip'>
          $10
        </div>
        <div onClick={() => getChipValue(100)} className='chip'>
          $100
        </div>
        <div onClick={() => getChipValue(500)} className='chip'>
          $500
        </div> */}
      </div>
    </div>
  )
}

export default Chips
