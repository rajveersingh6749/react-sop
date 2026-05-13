import React from 'react'
import '../styles/style.css'

const Chips = ({ setSelectedChip }) => {
  const getChipValue = (value) => {
    console.log('Chips Value: ', value)
    setSelectedChip(value)
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
