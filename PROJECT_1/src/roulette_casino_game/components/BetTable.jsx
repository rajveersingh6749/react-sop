import React, { useEffect, useState } from 'react'
import '../styles/style.css'

const BetTable = ({
  spinResult,
  setSpinResult,
  setSelectedChip,
  setBets,
  bets,
  placeBet,
  checkIfBetWon,
  isRed,
  balance,
  setBalance,
  history,
  setHistory,
}) => {
  // const placeBet = (type, value) => {
  //   console.log(bets[bets.length - 1])
  //   setBets((prev) => [...prev, { type, value, amount: selectedChip }])
  // }

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
  }

  const handleNewRound = () => {
    setBets([])
    setSpinResult(null)
    setColor('red')
    setRoundFinished(false)
  }

  // const clearFunc = () => {
  //   setSelectedChip(10)
  //   setBets([])
  //   setSpinResult(null)
  // }

  // const getRandomNumberAndColor = () => {
  //   const randomNumber = Math.floor(Math.random() * 37)
  //   console.log('Spin Result: ', randomNumber)
  //   setSpinResult(randomNumber)
  //   setColor((prev) => (prev === 'red' ? 'black' : 'red'))
  //   console.log('Spin Color: ', color)
  // }

  const getRandomNumberAndColor = () => {
    const randomNumber = Math.floor(Math.random() * 37)
    const actualColor =
      randomNumber === 0 ? 'green' : isRed(randomNumber) ? 'red' : 'black'
    setSpinResult(randomNumber)
    setColor(actualColor)
    setRoundFinished(true)
  }

  const winningBets = bets.filter((bet) => checkIfBetWon(bet, spinResult))
  // console.log('Winning Bets: ', winningBets)

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

  useEffect(() => {
    if (spinResult === null || bets.length === 0) return

    const totalWinnings = winningBets.reduce(
      (sum, bet) => sum + getPayoutForBet(bet),
      0,
    )

    setHistory((prev) =>
      [
        { 
          spinNumber: spinResult, 
          spinColor: color,
          winningBets,
          totalWinnings,
          didWin: winningBets.length > 0
        }, ...prev
      ].slice(0, 10),
    )

    setBalance((prev) => prev + totalWinnings)
  }, [spinResult, bets])

  console.log("History: ", history)

  return (
    <div className='roulette_container'>
      {/* <div className='clr_btn'>
        <button onClick={clearFunc}>Clear</button>
      </div> */}
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
      <div>
        {spinResult !== null && (
          <div>
            <h3>Spin Number: {spinResult}</h3>
            <h3>Spin Color: {color}</h3>

            {spinResult !== null && bets.length === 0 ? (
              <p>No bet placed</p>
            ) : spinResult !== null ? (
              winningBets.length > 0 ? (
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
              )
            ) : null}

            {/* {winningBets.length > 0 && bets.length === 0 ? (
            // <p>No bet placed</p> 
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
          )} */}
          </div>
        )}
      </div>
      <h2>Place Your Bets</h2>
      <div className='table_container'>
        <div onClick={getRandomNumberAndColor} className='spin'>
          Spin
        </div>
        <div className='btn_container'>
          <div className='btn_container'>
            <button onClick={handleNewRound} className='restart'>
              New Round
            </button>

            <button onClick={handleResetGame} className='restart'>
              Reset Game
            </button>
          </div>
        </div>

        <div className='bet_table'>
          <button
            onClick={() => handlePlaceBet('number', 0)}
            // value='0'
            className='btn zero'
          >
            0
          </button>
          <button
            onClick={() => handlePlaceBet('number', 3)}
            // value='3'
            className='btn btn_3'
          >
            3
          </button>
          <button
            onClick={() => handlePlaceBet('number', 6)}
            // value='6'
            className='btn btn_6'
          >
            6
          </button>
          <button
            onClick={() => handlePlaceBet('number', 9)}
            // value='9'
            className='btn btn_9'
          >
            9
          </button>
          <button
            onClick={() => handlePlaceBet('number', 12)}
            // value='12'
            className='btn btn_12'
          >
            12
          </button>
          <button
            onClick={() => handlePlaceBet('number', 15)}
            // value='15'
            className='btn btn_15'
          >
            15
          </button>
          <button
            onClick={() => handlePlaceBet('number', 18)}
            // value='18'
            className='btn btn_18'
          >
            18
          </button>
          <button
            onClick={() => handlePlaceBet('number', 21)}
            // value='21'
            className='btn btn_21'
          >
            21
          </button>
          <button
            onClick={() => handlePlaceBet('number', 24)}
            // value='24'
            className='btn btn_24'
          >
            24
          </button>
          <button
            onClick={() => handlePlaceBet('number', 27)}
            // value='27'
            className='btn btn_27'
          >
            27
          </button>
          <button
            onClick={() => handlePlaceBet('number', 30)}
            // value='30'
            className='btn btn_30'
          >
            30
          </button>
          <button
            onClick={() => handlePlaceBet('number', 33)}
            // value='33'
            className='btn btn_33'
          >
            33
          </button>
          <button
            onClick={() => handlePlaceBet('number', 36)}
            // value='36'
            className='btn btn_36'
          >
            36
          </button>
          <button
            onClick={() => handlePlaceBet('column', '3RD')}
            // value='3RD'
            className='btn'
          >
            3<span>RD</span>
          </button>
          <button
            onClick={() => handlePlaceBet('number', 2)}
            // value='2'
            className='btn btn_2'
          >
            2
          </button>
          <button
            onClick={() => handlePlaceBet('number', 5)}
            // value='5'
            className='btn btn_5'
          >
            5
          </button>
          <button
            onClick={() => handlePlaceBet('number', 8)}
            // value='8'
            className='btn btn_8'
          >
            8
          </button>
          <button
            onClick={() => handlePlaceBet('number', 11)}
            // value='11'
            className='btn btn_11'
          >
            11
          </button>
          <button
            onClick={() => handlePlaceBet('number', 14)}
            // value='14'
            className='btn btn_14'
          >
            14
          </button>
          <button
            onClick={() => handlePlaceBet('number', 17)}
            // value='17'
            className='btn btn_17'
          >
            17
          </button>
          <button
            onClick={() => handlePlaceBet('number', 20)}
            // value='20'
            className='btn btn_20'
          >
            20
          </button>
          <button
            onClick={() => handlePlaceBet('number', 23)}
            // value='23'
            className='btn btn_23'
          >
            23
          </button>
          <button
            onClick={() => handlePlaceBet('number', 26)}
            // value='26'
            className='btn btn_26'
          >
            26
          </button>
          <button
            onClick={() => handlePlaceBet('number', 29)}
            // value='29'
            className='btn btn_29'
          >
            29
          </button>
          <button
            onClick={() => handlePlaceBet('number', 32)}
            // value='32'
            className='btn btn_32'
          >
            32
          </button>
          <button
            onClick={() => handlePlaceBet('number', 35)}
            // value='35'
            className='btn btn_35'
          >
            35
          </button>
          <button
            onClick={() => handlePlaceBet('column', '2ND')}
            // value='2ND'
            className='btn'
          >
            2<span>ND</span>
          </button>
          <button
            onClick={() => handlePlaceBet('number', 1)}
            // value='1'
            className='btn btn_1'
          >
            1
          </button>
          <button
            onClick={() => handlePlaceBet('number', 4)}
            // value='4'
            className='btn btn_4'
          >
            4
          </button>
          <button
            onClick={() => handlePlaceBet('number', 7)}
            // value='7'
            className='btn btn_7'
          >
            7
          </button>
          <button
            onClick={() => handlePlaceBet('number', 10)}
            // value='10'
            className='btn btn_10'
          >
            10
          </button>
          <button
            onClick={() => handlePlaceBet('number', 13)}
            // value='13'
            className='btn btn_13'
          >
            13
          </button>
          <button
            onClick={() => handlePlaceBet('number', 16)}
            // value='16'
            className='btn btn_16'
          >
            16
          </button>
          <button
            onClick={() => handlePlaceBet('number', 19)}
            // value='19'
            className='btn btn_19'
          >
            19
          </button>
          <button
            onClick={() => handlePlaceBet('number', 22)}
            // value='22'
            className='btn btn_22'
          >
            22
          </button>
          <button
            onClick={() => handlePlaceBet('number', 25)}
            // value='25'
            className='btn btn_25'
          >
            25
          </button>
          <button
            onClick={() => handlePlaceBet('number', 28)}
            // value='28'
            className='btn btn_28'
          >
            28
          </button>
          <button
            onClick={() => handlePlaceBet('number', 31)}
            // value='31'
            className='btn btn_31'
          >
            31
          </button>
          <button
            onClick={() => handlePlaceBet('number', 34)}
            // value='34'
            className='btn btn_34'
          >
            34
          </button>
          <button
            onClick={() => handlePlaceBet('column', '1ST')}
            // value='1ST'
            className='btn'
          >
            1<span>ST</span>
          </button>
          <button
            // onClick={() => handlePlaceBet('number', 'after_first')}
            className='after_first'
          ></button>
          <button
            onClick={() => handlePlaceBet('dozen', '1-12')}
            // value='1-12'
            className='btn btn_112'
          >
            1-12
          </button>
          <button
            onClick={() => handlePlaceBet('dozen', '13-24')}
            // value='13-24'
            className='btn btn_1324'
          >
            13-24
          </button>
          <button
            onClick={() => handlePlaceBet('dozen', '25-36')}
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
            onClick={() => handlePlaceBet('range', '1-18')}
            // value='1-18'
            className='btn span_2'
          >
            1-18
          </button>
          <button
            onClick={() => handlePlaceBet('parity', 'EVEN')}
            // value='EVEN'
            className='btn span_2'
          >
            EVEN
          </button>
          <button
            onClick={() => handlePlaceBet('color', 'red')}
            // value='Red'
            className='btn span_2 red'
          ></button>
          <button
            onClick={() => handlePlaceBet('color', 'black')}
            // value='Black'
            className='btn span_2 black'
          ></button>
          <button
            onClick={() => handlePlaceBet('parity', 'ODD')}
            // value='ODD'
            className='btn span_2'
          >
            ODD
          </button>
          <button
            onClick={() => handlePlaceBet('range', '19-36')}
            // value='19-36'
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
