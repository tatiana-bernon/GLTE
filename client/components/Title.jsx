import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GameOver extends Component {
  render () {
    return (
      <div className="rows is-vcentered">
        <h1 className="row; has-text-white title is-1">Congratulations, Pohutukawa!</h1>
        <h2 className="row; has-text-white title is-2">Let's Have Some Fun</h2>

        <img className="row"
          style={{ height: '300px', width: '400px' }}
          // src={'https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png'}
          src={'https://media.giphy.com/media/3EfgWHj0YIDrW/giphy.gif'}
        />
        <br></br>
        <Link to={{ pathname: '/Card' }} ><button className="button is-rounded" style={{ margin: '10px' }}>Play Now!</button></Link>
      </div>
    )
  }
}
