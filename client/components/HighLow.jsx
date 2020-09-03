import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
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
      return <Redirect to={{ pathname: '/gameOver', image: this.state.image, value: this.state.value, color: this.state.color, suit: this.state.suit, number: this.state.number }}/>
    }
    return (
      <div>
        <h1>HEYYYYY</h1>
        <img
          style={{ height: '400px', width: '400px' }}
          src={this.state.image}
        />

        <Link onClick={this.highCard} to={{ pathname: '/route', image: this.state.image }} ><button>High Card</button></Link>
        <button onClick={this.lowCard}>Low Card</button>
      </div>
    )
  }
}
