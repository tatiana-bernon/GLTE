import React from 'react'
import { Route } from 'react-router-dom'

import { getWelcome } from '../api'

import Card from "./Card"
import GameOver from "./GameOver"
import HighLow from "./HighLow"
import InOrOut from "./InOrOut"


class App extends React.Component {
  state = {
    welcomeStatement: ''
  }
  componentDidMount () {
    getWelcome().then((res) =>
      this.setState({ welcomeStatement: res.statement })
    )
  }
  render () {
    return (
      <>
        <Route exact path="/" component={Card} />
        <Route path="/gameOver" component={GameOver} />
        <Route path="/HighLow" component={HighLow} />
        <Route path="/InOrdOut" component={InOrOut}/>
      </>
    )
  }
}

export default App
