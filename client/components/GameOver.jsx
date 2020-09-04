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
          src={this.state.image}
        />
        <br></br>
        <Link to={{ pathname: '/' }} ><button>Reset</button></Link>
        <a href="/"></a>
      </div>
    )
  }
}
