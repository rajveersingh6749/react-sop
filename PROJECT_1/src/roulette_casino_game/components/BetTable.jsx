import React, { useState } from 'react'
import { isRed, checkIfBetWon } from './utils/checkBetWinning'
import '../styles/style.css'

const BetTable = ({
  setSpinResult,
  setSelectedChip,
  setBets,
  bets,
  placeBet,
  balance,
  setBalance,
  history,
  setHistory,
}) => {
  const [color, setColor] = useState('red')
  const [roundFinished, setRoundFinished] = useState(false)

  const handlePlaceBet = (type, value) => {
    if (roundFinished) return
    placeBet(type, value)
  }

  const handleResetGame = () => {
    setBets([])
    setSpinResult(null)
    setBalance(1000)
    setSelectedChip(10)
    setColor('red')
    setRoundFinished(false)
    setHistory([])
  }

  const handleNewRound = () => {
    setBets([])
    setSpinResult(null)
    setColor('red')
    setRoundFinished(false)
  }

  const getPayoutForBet = (bet) => {
    switch (bet.type) {
      case 'number':
        return bet.amount * 36
      case 'parity':
      case 'color':
      case 'range':
        return bet.amount * 2
      case 'dozen':
      case 'column':
        return bet.amount * 3
      default:
        return 0
    }
  }

  const handleSpin = () => {
    if (bets.length === 0) return

    const randomNumber = Math.floor(Math.random() * 37)

    const actualColor =
      randomNumber === 0 ? 'green' : isRed(randomNumber) ? 'red' : 'black'

    const winningBets = bets.filter((bet) => checkIfBetWon(bet, randomNumber))

    const totalWinnings = winningBets.reduce(
      (sum, bet) => sum + getPayoutForBet(bet),
      0,
    )

    setSpinResult(randomNumber)
    setColor(actualColor)
    setRoundFinished(true)

    setBalance((prev) => prev + totalWinnings)

    setHistory((prev) =>
      [
        {
          spinNumber: randomNumber,
          spinColor: actualColor,
          winningBets,
          totalWinnings,
          didWin: winningBets.length > 0,
        },
        ...prev,
      ].slice(0, 10),
    )
  }

  return (
    <div className='roulette_container'>
      <h2>Place Your Bets</h2>
      <div className='table_container'>
        <div onClick={handleSpin} className='spin'>
          Spin
        </div>

        <div className='btn_container'>
          <button onClick={handleNewRound} className='restart'>
            New Round
          </button>

          <button onClick={handleResetGame} className='restart'>
            Reset Game
          </button>
        </div>

        <div className='bet_table'>
          <button
            onClick={() => handlePlaceBet('number', 0)}
            className='btn zero'
          >
            0
          </button>
          <button
            onClick={() => handlePlaceBet('number', 3)}
            className='btn btn_3'
          >
            3
          </button>
          <button
            onClick={() => handlePlaceBet('number', 6)}
            className='btn btn_6'
          >
            6
          </button>
          <button
            onClick={() => handlePlaceBet('number', 9)}
            className='btn btn_9'
          >
            9
          </button>
          <button
            onClick={() => handlePlaceBet('number', 12)}
            className='btn btn_12'
          >
            12
          </button>
          <button
            onClick={() => handlePlaceBet('number', 15)}
            className='btn btn_15'
          >
            15
          </button>
          <button
            onClick={() => handlePlaceBet('number', 18)}
            className='btn btn_18'
          >
            18
          </button>
          <button
            onClick={() => handlePlaceBet('number', 21)}
            className='btn btn_21'
          >
            21
          </button>
          <button
            onClick={() => handlePlaceBet('number', 24)}
            className='btn btn_24'
          >
            24
          </button>
          <button
            onClick={() => handlePlaceBet('number', 27)}
            className='btn btn_27'
          >
            27
          </button>
          <button
            onClick={() => handlePlaceBet('number', 30)}
            className='btn btn_30'
          >
            30
          </button>
          <button
            onClick={() => handlePlaceBet('number', 33)}
            className='btn btn_33'
          >
            33
          </button>
          <button
            onClick={() => handlePlaceBet('number', 36)}
            className='btn btn_36'
          >
            36
          </button>
          <button
            onClick={() => handlePlaceBet('column', '3RD')}
            className='btn'
          >
            3<span>RD</span>
          </button>
          <button
            onClick={() => handlePlaceBet('number', 2)}
            className='btn btn_2'
          >
            2
          </button>
          <button
            onClick={() => handlePlaceBet('number', 5)}
            className='btn btn_5'
          >
            5
          </button>
          <button
            onClick={() => handlePlaceBet('number', 8)}
            className='btn btn_8'
          >
            8
          </button>
          <button
            onClick={() => handlePlaceBet('number', 11)}
            className='btn btn_11'
          >
            11
          </button>
          <button
            onClick={() => handlePlaceBet('number', 14)}
            className='btn btn_14'
          >
            14
          </button>
          <button
            onClick={() => handlePlaceBet('number', 17)}
            className='btn btn_17'
          >
            17
          </button>
          <button
            onClick={() => handlePlaceBet('number', 20)}
            className='btn btn_20'
          >
            20
          </button>
          <button
            onClick={() => handlePlaceBet('number', 23)}
            className='btn btn_23'
          >
            23
          </button>
          <button
            onClick={() => handlePlaceBet('number', 26)}
            className='btn btn_26'
          >
            26
          </button>
          <button
            onClick={() => handlePlaceBet('number', 29)}
            className='btn btn_29'
          >
            29
          </button>
          <button
            onClick={() => handlePlaceBet('number', 32)}
            className='btn btn_32'
          >
            32
          </button>
          <button
            onClick={() => handlePlaceBet('number', 35)}
            className='btn btn_35'
          >
            35
          </button>
          <button
            onClick={() => handlePlaceBet('column', '2ND')}
            className='btn'
          >
            2<span>ND</span>
          </button>
          <button
            onClick={() => handlePlaceBet('number', 1)}
            className='btn btn_1'
          >
            1
          </button>
          <button
            onClick={() => handlePlaceBet('number', 4)}
            className='btn btn_4'
          >
            4
          </button>
          <button
            onClick={() => handlePlaceBet('number', 7)}
            className='btn btn_7'
          >
            7
          </button>
          <button
            onClick={() => handlePlaceBet('number', 10)}
            className='btn btn_10'
          >
            10
          </button>
          <button
            onClick={() => handlePlaceBet('number', 13)}
            className='btn btn_13'
          >
            13
          </button>
          <button
            onClick={() => handlePlaceBet('number', 16)}
            className='btn btn_16'
          >
            16
          </button>
          <button
            onClick={() => handlePlaceBet('number', 19)}
            className='btn btn_19'
          >
            19
          </button>
          <button
            onClick={() => handlePlaceBet('number', 22)}
            className='btn btn_22'
          >
            22
          </button>
          <button
            onClick={() => handlePlaceBet('number', 25)}
            className='btn btn_25'
          >
            25
          </button>
          <button
            onClick={() => handlePlaceBet('number', 28)}
            className='btn btn_28'
          >
            28
          </button>
          <button
            onClick={() => handlePlaceBet('number', 31)}
            className='btn btn_31'
          >
            31
          </button>
          <button
            onClick={() => handlePlaceBet('number', 34)}
            className='btn btn_34'
          >
            34
          </button>
          <button
            onClick={() => handlePlaceBet('column', '1ST')}
            className='btn'
          >
            1<span>ST</span>
          </button>
          <button className='after_first'></button>
          <button
            onClick={() => handlePlaceBet('dozen', '1-12')}
            className='btn btn_112'
          >
            1-12
          </button>
          <button
            onClick={() => handlePlaceBet('dozen', '13-24')}
            className='btn btn_1324'
          >
            13-24
          </button>
          <button
            onClick={() => handlePlaceBet('dozen', '25-36')}
            className='btn btn_2536'
          >
            25-36
          </button>
          <button className='after_2536'></button>
          <button className='before_118'></button>
          <button
            onClick={() => handlePlaceBet('range', '1-18')}
            className='btn span_2'
          >
            1-18
          </button>
          <button
            onClick={() => handlePlaceBet('parity', 'EVEN')}
            className='btn span_2'
          >
            EVEN
          </button>
          <button
            onClick={() => handlePlaceBet('color', 'red')}
            className='btn span_2 red'
          ></button>
          <button
            onClick={() => handlePlaceBet('color', 'black')}
            className='btn span_2 black'
          ></button>
          <button
            onClick={() => handlePlaceBet('parity', 'ODD')}
            className='btn span_2'
          >
            ODD
          </button>
          <button
            onClick={() => handlePlaceBet('range', '19-36')}
            className='btn span_2'
          >
            19-36
          </button>
          <button className='after_1936'></button>
        </div>

        <div className='history_container'>
          <h3>Round History</h3>

          <div className='history_list'>
            {history.map((item, index) => (
              <div key={index} className={`history_card ${item.spinColor}`}>
                <p>Number: {item.spinNumber}</p>
                <p>Color: {item.spinColor}</p>
                <p>Result: {item.didWin ? 'Won' : 'Lost'}</p>
                <p>Payout: {item.totalWinnings}</p>

                {item.winningBets.length > 0 && (
                  <div>
                    <strong>Winning Bets:</strong>

                    {item.winningBets.map((bet, i) => (
                      <p key={i}>
                        {bet.type} - {bet.value}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      Total Balance: {`$${balance}`}
    </div>
  )
}

export default BetTable
