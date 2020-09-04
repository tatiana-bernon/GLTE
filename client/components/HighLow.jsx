import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getCard } from '../api'

export default class HighLow extends Component {
  state = {
    image: this.props.location.image,
    value: this.props.location.value,
    suit: null,
    color: null,
    number: null
  }
  highCard = () => {
    getCard().then((card) => {
      this.setState({
        image: card[0].image,
        value: card[0].value,
        suit: card[0].suit,
        number: 'a'
      })
    })
  }
  lowCard = () => {
    getCard().then((card) => {
      this.setState({
        image: card[0].image,
        value: card[0].value,
        suit: card[0].suit,
        number: 'a'
      })
    })
  }
  render () {
    if (this.state.number === 'a') {
      return <Redirect to={{ pathname: '/gameOver', image: this.state.image }}/>
    }
    return (
      <div>
        <h1>High or Low?</h1>
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.state.image}
        />

        <button onClick={this.highCard}>High Card</button>
        <button onClick={this.lowCard}>Low Card</button>
      </div>
    )
  }
}
