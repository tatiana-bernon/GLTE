import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getCard } from '../api'

export default class Card extends Component {
  state = {
    image:
      'https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png',
    suit: null,
    color: null,
    value: null
  }
  redCard = () => {
    getCard().then((card) => {
      this.setState({
        image: card[0].image,
        value: card[0].value,
        suit: card[0].suit,
        color: 'red'
      })
    })
  }
  blackCard = () => {
    getCard().then((card) => {
      this.setState({
        image: card[0].image,
        value: card[0].value,
        suit: card[0].suit,
        color: 'black'
      })
    })
  }

  // redDelay = () => {
  //   setTimeout(() => , 2000)
  // }
  // blackDelay = () => {
  //   setTimeout(() => 2000)
  // }
  render () {
    const s = {
      textDecorationLine: 'line-through'
    }

    // if (
    //   this.state.suit === "HEARTS" || this.state.suit === "DIAMONDS" && this.state.color === "black") {
    //   return <Redirect to="/gameOver" />
    // } else if (
    //   this.state.suit === "SPADES" || this.state.suit === "CLUBS" && this.state.color === "red") {
    //   return <Redirect to="/gameOver" />
    // } else if(this.state.suit === "SPADES" || this.state.suit === "CLUBS" && this.state.color === "black"){
    //     return <Redirect to={{pathname: "/HighLow", image: this.state.image, value: this.state.value}}/>
    // }
    if (this.state.color === 'black' || this.state.color === 'red') {
      return <Redirect to={{ pathname: '/HighLow', image: this.state.image, value: this.state.value, color: this.state.color, suit: this.state.suit }}/>
    }

    return (
      <div>
        <h1>
          Red or Black?
        </h1>
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.state.image}
        />
        <br></br>
        <button onClick={this.redCard}>Red</button>
        <button onClick={this.blackCard}>Black</button>
      </div>
    )
  }
}
