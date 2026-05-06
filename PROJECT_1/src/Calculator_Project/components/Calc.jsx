import React, { useState } from 'react'
import '../styles/Style.css'

const Calc = () => {
  const [data, setData] = useState('')

  const getValue = (e) => {
    console.log(e.target.value)
    setData(data.concat(e.target.value))
  }

  const calculate = () => {
    try {
      setData(eval(data).toString())
    } catch (error) {
      setData('Error')
    }
  }

  const clear = () => {
    setData("")
  }

  const back = () => {
    setData(data.slice(0, -1))
  }

  return (
    <div>
      <div className='calc_container'>
        <h1>Calculator</h1>
        
        <div className='calc'>
          <div className='display'>{data || '0'}</div>

          <br />

          <div className='buttons'>
            <button onClick={clear} className='actions'>
              C
            </button>
            <button onClick={back} className='actions'>
              DEL
            </button>
            <button onClick={getValue} value='%'>
              %
            </button>
            <button onClick={getValue} value='/'>
              /
            </button>

            <button onClick={getValue} value='7'>
              7
            </button>
            <button onClick={getValue} value='8'>
              8
            </button>
            <button onClick={getValue} value='9'>
              9
            </button>
            <button onClick={getValue} value='*'>
              *
            </button>

            <button onClick={getValue} value='4'>
              4
            </button>
            <button onClick={getValue} value='5'>
              5
            </button>
            <button onClick={getValue} value='6'>
              6
            </button>
            <button onClick={getValue} value='-'>
              -
            </button>

            <button onClick={getValue} value='1'>
              1
            </button>
            <button onClick={getValue} value='2'>
              2
            </button>
            <button onClick={getValue} value='3'>
              3
            </button>
            <button onClick={getValue} value='+'>
              +
            </button>

            <button onClick={getValue} value='0'>
              0
            </button>
            <button onClick={getValue} value='.'>
              .
            </button>
            <button onClick={calculate} className='equals'>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calc
