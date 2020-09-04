import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getCard } from '../api'

export default class InOrOut extends Component {
  state = {
    image: this.props.location.image,
    value: this.props.location.value,
    suit: null,
    color: null,
    number: null
  }
  InCard = () => {
    getCard().then((card) => {
      this.setState({
        image: card[0].image,
        value: card[0].value,
        suit: card[0].suit,
        number: 'a'
      })
    })
  }
  OutCard = () => {
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
      const InOrOutCard = this.state.image
      return <Redirect to={{ pathname: '/Picture', image: this.state.image, cardImage: this.props.location.cardImage, HighLowCard: this.props.location.HighLowCard, InOrOutCard: InOrOutCard }} />
    }
    return (
      <div>
        <h1>In or Out?</h1>
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.props.location.cardImage}
        />
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.props.location.HighLowCard}
        />

        <button onClick={this.InCard}>In</button>
        <button onClick={this.OutCard}>Out</button>
      </div>
    )
  }
}
