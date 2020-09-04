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
    if (this.state.number === 'a') {
      const PictureCard = this.state.image
      return <Redirect to={{ pathname: '/gameOver', image: this.state.image, cardImage: this.props.location.cardImage, HighLowCard: this.props.location.HighLowCard, InOrOutCard: this.props.location.InOrOutCard, PictureCard: PictureCard }}/>
    }

    return (
      <div>
        <h1>Picture or Non-Picture?</h1>

        <img
          style={{ height: '300px', width: '250px' }}
          src={this.props.location.cardImage}
        />
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.props.location.HighLowCard}
        />
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.props.location.InOrOutCard}
        />
        <br></br>
        <button className="button is-rounded" onClick={this.pictureCard}>Picture</button>
        <button className="button is-rounded" onClick={this.nonPictureCard}>Non-Picture</button>
      </div>
    )
  }
}
