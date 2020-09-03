import React, { Component } from "react"

export default class InAndOut extends Component {
  state = {
    image: this.props.location.image,
    value: this.props.location.value,
  }
  render() {
    return (
      <div>
        <h1>In and Out page</h1>
        <img
          style={{ height: "400px", width: "400px" }}
          src={this.state.image}
        />
      </div>
    )
  }
}
