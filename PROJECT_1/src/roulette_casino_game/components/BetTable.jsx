import React, { useState } from 'react'
import '../styles/style.css'

const BetTable = ({ spinResult, setSpinResult, selectedNo, setSelectedNo }) => {
  const [history, setHistory] = useState([])

  const getValue = (e) => {
    console.log('Selected Number: ', e.target.value)
    setSelectedNo(e.target.value)
  }

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 37)
    console.log('random number: ', randomNumber)
    setSpinResult(randomNumber)
  }

  return (
    <div className='roulette_container'>
      {spinResult &&
        selectedNo &&
        (spinResult == selectedNo ? <p>You Won!</p> : <p>You Lost!</p>)}

      <h2>Place Your Bets</h2>

      <div className='table_container'>
        <div onClick={getRandomNumber} className='spin'>
          Spin
        </div>

        <div className='bet_table'>
          <button onClick={getValue} value='0' className='btn zero'>
            0
          </button>
          <button onClick={getValue} value='3' className='btn btn_3'>
            3
          </button>
          <button onClick={getValue} value='6' className='btn btn_6'>
            6
          </button>
          <button onClick={getValue} value='9' className='btn btn_9'>
            9
          </button>
          <button onClick={getValue} value='12' className='btn btn_12'>
            12
          </button>
          <button onClick={getValue} value='15' className='btn btn_15'>
            15
          </button>
          <button onClick={getValue} value='18' className='btn btn_18'>
            18
          </button>
          <button onClick={getValue} value='21' className='btn btn_21'>
            21
          </button>
          <button onClick={getValue} value='24' className='btn btn_24'>
            24
          </button>
          <button onClick={getValue} value='27' className='btn btn_27'>
            27
          </button>
          <button onClick={getValue} value='30' className='btn btn_30'>
            30
          </button>
          <button onClick={getValue} value='33' className='btn btn_33'>
            33
          </button>
          <button onClick={getValue} value='36' className='btn btn_36'>
            36
          </button>
          <button onClick={getValue} value='3RD' className='btn'>
            3<span>RD</span>
          </button>
          <button onClick={getValue} value='2' className='btn btn_2'>
            2
          </button>
          <button onClick={getValue} value='5' className='btn btn_5'>
            5
          </button>
          <button onClick={getValue} value='8' className='btn btn_8'>
            8
          </button>
          <button onClick={getValue} value='11' className='btn btn_11'>
            11
          </button>
          <button onClick={getValue} value='14' className='btn btn_14'>
            14
          </button>
          <button onClick={getValue} value='17' className='btn btn_17'>
            17
          </button>
          <button onClick={getValue} value='20' className='btn btn_20'>
            20
          </button>
          <button onClick={getValue} value='23' className='btn btn_23'>
            23
          </button>
          <button onClick={getValue} value='26' className='btn btn_26'>
            26
          </button>
          <button onClick={getValue} value='29' className='btn btn_29'>
            29
          </button>
          <button onClick={getValue} value='32' className='btn btn_32'>
            32
          </button>
          <button onClick={getValue} value='35' className='btn btn_35'>
            35
          </button>
          <button onClick={getValue} value='2ND' className='btn'>
            2<span>ND</span>
          </button>
          <button onClick={getValue} value='1' className='btn btn_1'>
            1
          </button>
          <button onClick={getValue} value='4' className='btn btn_4'>
            4
          </button>
          <button onClick={getValue} value='7' className='btn btn_7'>
            7
          </button>
          <button onClick={getValue} value='10' className='btn btn_10'>
            10
          </button>
          <button onClick={getValue} value='13' className='btn btn_13'>
            13
          </button>
          <button onClick={getValue} value='16' className='btn btn_16'>
            16
          </button>
          <button onClick={getValue} value='19' className='btn btn_19'>
            19
          </button>
          <button onClick={getValue} value='22' className='btn btn_22'>
            22
          </button>
          <button onClick={getValue} value='25' className='btn btn_25'>
            25
          </button>
          <button onClick={getValue} value='28' className='btn btn_28'>
            28
          </button>
          <button onClick={getValue} value='31' className='btn btn_31'>
            31
          </button>
          <button onClick={getValue} value='34' className='btn btn_34'>
            34
          </button>
          <button onClick={getValue} value='1ST' className='btn'>
            1<span>ST</span>
          </button>
          <button onClick={getValue} className='after_first'></button>
          <button onClick={getValue} value='1-12' className='btn btn_112'>
            1-12
          </button>
          <button onClick={getValue} value='13-24' className='btn btn_1324'>
            13-24
          </button>
          <button onClick={getValue} value='25-36' className='btn btn_2536'>
            25-36
          </button>
          <button onClick={getValue} className='after_2536'></button>
          <button onClick={getValue} className='before_118'></button>
          <button onClick={getValue} value='1-18' className='btn span_2'>
            1-18
          </button>
          <button onClick={getValue} value='EVEN' className='btn span_2'>
            EVEN
          </button>
          <button
            onClick={getValue}
            value='Red'
            className='btn span_2 red'
          ></button>
          <button
            onClick={getValue}
            value='Black'
            className='btn span_2 black'
          ></button>
          <button onClick={getValue} value='ODD' className='btn span_2'>
            ODD
          </button>
          <button onClick={getValue} value='19-36' className='btn span_2'>
            19-36
          </button>
          <button onClick={getValue} className='after_1936'></button>
        </div>

        <div className='history'>
          {history.length > 0 &&
            history.map((h, index) => <p key={index}>{h}</p>)}
        </div>
      </div>
    </div>
  )
}

export default BetTable
