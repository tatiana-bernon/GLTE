import React, { Component } from "react"

export default class GameOver extends Component {
  render() {
    return (
      <div>
        <h1>YOU LOST</h1>
        <h2>DRINK</h2>
        <a href="/">Reset</a>
      </div>
    )
  }
}
