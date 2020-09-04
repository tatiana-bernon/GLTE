import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GameOver extends Component {
  render () {
    return (
      <div>
        <h1>Would Like To Play a Game?</h1>

        <img
          style={{ height: '300px', width: '250px' }}
          src={'https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png'}
        />
        <br></br>
        <Link to={{ pathname: '/Card' }} ><button className="button is-rounded">Play Now!</button></Link>
      </div>
    )
  }
}
