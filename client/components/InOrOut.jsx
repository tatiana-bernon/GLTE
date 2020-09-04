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
      return <Redirect to={{ pathname: '/Picture', image: this.state.image }} />
    }
    return (
      <div>
        <h1>In or Out?</h1>
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.state.image}
        />
        <br></br>
        <button onClick={this.InCard}>In</button>
        <button onClick={this.OutCard}>Out</button>
      </div>
    )
  }
}
