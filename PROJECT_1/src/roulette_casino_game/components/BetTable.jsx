import React, { useState } from 'react'
import '../styles/style.css'

const BetTable = ({
  spinResult,
  setSpinResult,
  selectedChip,
  setSelectedChip,
  bets,
  setBets,
  placeBet,
  checkIfBetWon,
}) => {
  // const placeBet = (type, value) => {
  //   console.log(bets[bets.length - 1])
  //   setBets((prev) => [...prev, { type, value, amount: selectedChip }])
  // }

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 37)
    console.log('random number: ', randomNumber)
    setSpinResult(randomNumber)
  }

  const winningBets = bets.filter((bet) => checkIfBetWon(bet, spinResult))

  return (
    <div className='roulette_container'>
      {/* {
        spinResult !== null &&
          bets.length !== 0 &&
          (bets.some((bet) => checkIfBetWon(bet, spinResult)) ? (
            <p>You Won!</p>
          ) : (
            <p>You Lost!</p>
          ))
        // (bets.some((bet) => bet.value === spinResult) ? (
        //   <p>You Won!</p>
        // ) : (
        //   <p>You Lost!</p>
        // ))
      } */}

      {spinResult !== null && (
        <div>
          <h3>Spin Result: {spinResult}</h3>

          {winningBets.length > 0 ? (
            <div>
              <p>You Won!</p>
              {winningBets.map((bet, index) => (
                <p key={index}>
                  {bet.type} - {bet.value}
                </p>
              ))}
            </div>
          ) : (
            <p>You Lost!</p>
          )}
        </div>
      )}

      <h2>Place Your Bets</h2>

      <div className='table_container'>
        <div onClick={getRandomNumber} className='spin'>
          Spin
        </div>

        <div className='bet_table'>
          <button
            onClick={() => placeBet('number', 0)}
            // value='0'
            className='btn zero'
          >
            0
          </button>
          <button
            onClick={() => placeBet('number', 3)}
            // value='3'
            className='btn btn_3'
          >
            3
          </button>
          <button
            onClick={() => placeBet('number', 6)}
            // value='6'
            className='btn btn_6'
          >
            6
          </button>
          <button
            onClick={() => placeBet('number', 9)}
            // value='9'
            className='btn btn_9'
          >
            9
          </button>
          <button
            onClick={() => placeBet('number', 12)}
            // value='12'
            className='btn btn_12'
          >
            12
          </button>
          <button
            onClick={() => placeBet('number', 15)}
            // value='15'
            className='btn btn_15'
          >
            15
          </button>
          <button
            onClick={() => placeBet('number', 18)}
            // value='18'
            className='btn btn_18'
          >
            18
          </button>
          <button
            onClick={() => placeBet('number', 21)}
            // value='21'
            className='btn btn_21'
          >
            21
          </button>
          <button
            onClick={() => placeBet('number', 24)}
            // value='24'
            className='btn btn_24'
          >
            24
          </button>
          <button
            onClick={() => placeBet('number', 27)}
            // value='27'
            className='btn btn_27'
          >
            27
          </button>
          <button
            onClick={() => placeBet('number', 30)}
            // value='30'
            className='btn btn_30'
          >
            30
          </button>
          <button
            onClick={() => placeBet('number', 33)}
            // value='33'
            className='btn btn_33'
          >
            33
          </button>
          <button
            onClick={() => placeBet('number', 36)}
            // value='36'
            className='btn btn_36'
          >
            36
          </button>
          <button
            onClick={() => placeBet('column', '3RD')}
            // value='3RD'
            className='btn'
          >
            3<span>RD</span>
          </button>
          <button
            onClick={() => placeBet('number', 2)}
            // value='2'
            className='btn btn_2'
          >
            2
          </button>
          <button
            onClick={() => placeBet('number', 5)}
            // value='5'
            className='btn btn_5'
          >
            5
          </button>
          <button
            onClick={() => placeBet('number', 8)}
            // value='8'
            className='btn btn_8'
          >
            8
          </button>
          <button
            onClick={() => placeBet('number', 11)}
            // value='11'
            className='btn btn_11'
          >
            11
          </button>
          <button
            onClick={() => placeBet('number', 14)}
            // value='14'
            className='btn btn_14'
          >
            14
          </button>
          <button
            onClick={() => placeBet('number', 17)}
            // value='17'
            className='btn btn_17'
          >
            17
          </button>
          <button
            onClick={() => placeBet('number', 20)}
            // value='20'
            className='btn btn_20'
          >
            20
          </button>
          <button
            onClick={() => placeBet('number', 23)}
            // value='23'
            className='btn btn_23'
          >
            23
          </button>
          <button
            onClick={() => placeBet('number', 26)}
            // value='26'
            className='btn btn_26'
          >
            26
          </button>
          <button
            onClick={() => placeBet('number', 29)}
            // value='29'
            className='btn btn_29'
          >
            29
          </button>
          <button
            onClick={() => placeBet('number', 32)}
            // value='32'
            className='btn btn_32'
          >
            32
          </button>
          <button
            onClick={() => placeBet('number', 35)}
            // value='35'
            className='btn btn_35'
          >
            35
          </button>
          <button
            onClick={() => placeBet('column', '2ND')}
            // value='2ND'
            className='btn'
          >
            2<span>ND</span>
          </button>
          <button
            onClick={() => placeBet('number', 1)}
            // value='1'
            className='btn btn_1'
          >
            1
          </button>
          <button
            onClick={() => placeBet('number', 4)}
            // value='4'
            className='btn btn_4'
          >
            4
          </button>
          <button
            onClick={() => placeBet('number', 7)}
            // value='7'
            className='btn btn_7'
          >
            7
          </button>
          <button
            onClick={() => placeBet('number', 10)}
            // value='10'
            className='btn btn_10'
          >
            10
          </button>
          <button
            onClick={() => placeBet('number', 13)}
            // value='13'
            className='btn btn_13'
          >
            13
          </button>
          <button
            onClick={() => placeBet('number', 16)}
            // value='16'
            className='btn btn_16'
          >
            16
          </button>
          <button
            onClick={() => placeBet('number', 19)}
            // value='19'
            className='btn btn_19'
          >
            19
          </button>
          <button
            onClick={() => placeBet('number', 22)}
            // value='22'
            className='btn btn_22'
          >
            22
          </button>
          <button
            onClick={() => placeBet('number', 25)}
            // value='25'
            className='btn btn_25'
          >
            25
          </button>
          <button
            onClick={() => placeBet('number', 28)}
            // value='28'
            className='btn btn_28'
          >
            28
          </button>
          <button
            onClick={() => placeBet('number', 31)}
            // value='31'
            className='btn btn_31'
          >
            31
          </button>
          <button
            onClick={() => placeBet('number', 34)}
            // value='34'
            className='btn btn_34'
          >
            34
          </button>
          <button
            onClick={() => placeBet('column', '1ST')}
            // value='1ST'
            className='btn'
          >
            1<span>ST</span>
          </button>
          <button
            // onClick={() => placeBet('number', 'after_first')}
            className='after_first'
          ></button>
          <button
            onClick={() => placeBet('dozen', '1-12')}
            // value='1-12'
            className='btn btn_112'
          >
            1-12
          </button>
          <button
            onClick={() => placeBet('dozen', '13-24')}
            // value='13-24'
            className='btn btn_1324'
          >
            13-24
          </button>
          <button
            onClick={() => placeBet('dozen', '25-36')}
            // value='25-36'
            className='btn btn_2536'
          >
            25-36
          </button>
          <button
            // onClick={() => placeBet('number', 'after_2536')}
            className='after_2536'
          ></button>
          <button
            // onClick={() => placeBet('number', 'before_118')}
            className='before_118'
          ></button>
          <button
            onClick={() => placeBet('range', '1-18')}
            // value='1-18'
            className='btn span_2'
          >
            1-18
          </button>
          <button
            onClick={() => placeBet('parity', 'EVEN')}
            // value='EVEN'
            className='btn span_2'
          >
            EVEN
          </button>
          <button
            onClick={() => placeBet('color', 'red')}
            // value='Red'
            className='btn span_2 red'
          ></button>
          <button
            onClick={() => placeBet('color', 'black')}
            // value='Black'
            className='btn span_2 black'
          ></button>
          <button
            onClick={() => placeBet('parity', 'ODD')}
            // value='ODD'
            className='btn span_2'
          >
            ODD
          </button>
          <button
            onClick={() => placeBet('range', '19-36')}
            // value='19-36'
            className='btn span_2'
          >
            19-36
          </button>
          <button className='after_1936'></button>
        </div>
      </div>
    </div>
  )
}

export default BetTable
