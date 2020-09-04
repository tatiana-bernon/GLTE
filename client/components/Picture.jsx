import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getCard } from '../api'

export default class Picture extends Component {
  state = {
    image: this.props.location.image,
    suit: null,
    color: null,
    value: null,
    number: null
  }
  pictureCard = () => {
    getCard().then((card) => {
      this.setState({
        image: card[0].image,
        value: card[0].value,
        suit: card[0].suit,
        picture: 'picture',
        number: 'a'
      })
    })
  }
  nonPictureCard = () => {
    getCard().then((card) => {
      this.setState({
        image: card[0].image,
        value: card[0].value,
        suit: card[0].suit,
        picture: 'non picture',
        number: 'a'
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
    const stlying = {
      backgroundColor: 'green'
    }

    if (this.state.number === 'a') {
      return <Redirect to={{ pathname: '/gameOver', image: this.state.image }}/>
    }

    return (
      <div style={stlying}>
        <h1>Picture or No Picture?</h1>
        {/* <button onClick={this.pictureCard}>Picture</button>
        <button onClick={this.nonPictureCard}>Non-Picture</button> */}
        <img
          style={{ height: '400px', width: '400px' }}
          src={this.state.image}
        />
        <button onClick={this.pictureCard}>Picture Card</button>
        <button onClick={this.nonPictureCard}>Non Picture Card</button>
      </div>
    )
  }
}
