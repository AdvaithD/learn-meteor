import React, { Component } from 'react'

// Task Component

export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    )
  }
}
