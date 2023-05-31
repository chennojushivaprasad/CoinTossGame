import React from 'react'
import './index.css'

const coins = [
  {id: 0, imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png'},
  {id: 1, imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png'},
]
class CoinToss extends React.Component {
  state = {id: 0, noOfTails: 0, noOfHeads: 0, total: 0}

  tossCoin = () => {
    const randomCoinId = Math.floor(Math.random() * 2)
    const tails = randomCoinId === 1 ? 1 : 0
    const heads = randomCoinId === 0 ? 1 : 0
    this.setState(prevstate => ({
      id: randomCoinId,
      noOfTails: prevstate.noOfTails + tails,
      noOfHeads: prevstate.noOfHeads + heads,
      total: prevstate.total + 1,
    }))
  }

  render() {
    const {noOfHeads, total, noOfTails, id} = this.state

    return (
      <div className="container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="chooseHeadsTails">Heads (or) Tails</p>
          <img
            className="coin-image"
            src={coins[id].imgUrl}
            alt="toss result"
          />
          <button
            type="button"
            className="toss-coin-button"
            onClick={this.tossCoin}
          >
            Toss Coin
          </button>
          <div className="results">
            <p>Total: {total}</p>
            <p>Heads: {noOfHeads}</p>
            <p>Tails: {noOfTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
