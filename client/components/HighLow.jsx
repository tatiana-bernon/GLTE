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
      const HighLowCard = this.state.image
      return <Redirect to={{ pathname: '/InOrOut', image: this.state.image, cardImage: this.props.location.cardImage, HighLowCard: HighLowCard }}/>
    }
    
    return (
      <div>
        <h1>Higher or Lower?</h1>
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.state.image}
        />
        <br></br>
        <button className="button is-rounded" onClick={this.highCard}>Higher</button>
        <button className="button is-rounded" onClick={this.lowCard}>Lower</button>
      </div>
    )
  }
}
