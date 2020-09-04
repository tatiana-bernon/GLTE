import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GameOver extends Component {
  state ={
    image: this.props.location.image
  }
  render () {
    return (
      <div>
        <h1>YOU LOST</h1>
        <h2>DRINK</h2>
        <img
          style={{ height: '300px', width: '250px' }}
          src={this.state.image}
        />
        <Link to={{ pathname: '/' }} ><button>Reset</button></Link>
        <a href="/"></a>
      </div>
    )
  }
}
