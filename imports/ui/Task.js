import React, { Component } from 'react'
import { Tasks } from '../api/tasks.js'

// Task Component
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to its current value
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    })
  }
  deleteThisTask() {
    Tasks.remove(this.props.task._id)
  }
  render() {
    // give tasks a new class when they are checked off so we can style them in css
    const taskClassName = this.props.task.checked ? 'checked' : ''

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
            type="checkbox"
            readOnly
            checked={!!this.props.task.checked}
            onClick={this.toggleChecked.bind(this)}
        />

        <span className="text">
          <strong>{this.props.task.username}</strong> : {this.props.task.text}
        </span>
      </li>
    )
  }
}
