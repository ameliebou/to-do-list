import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className="task">
        <div className="task-title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="task-description">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Task;
