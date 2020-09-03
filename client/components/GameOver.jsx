import React, { Component } from 'react'

export default class GameOver extends Component {
  state ={
    image:
  }
  render () {
    return (
      <div>
        <h1>YOU LOST</h1>
        <h2>DRINK</h2>
        <img
          style={{ height: '400px', width: '400px' }}
          src={this.state.image}
        />
        <a href="/">Reset</a>
      </div>
    )
  }
}
