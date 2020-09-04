import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GameOver extends Component {
  state ={
    image: this.props.location.image
  }
  render () {
    return (
      <div>
        <h1>Game Over</h1>
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
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.props.location.PictureCard}
        />
        <Link to={{ pathname: '/' }} ><button>Reset</button></Link>
        <a href="/"></a>
      </div>
    )
  }
}
