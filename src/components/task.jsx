import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  handleClick = (event) => {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    return (
      <div className={this.state.done? "task done" : "task"} onClick={this.handleClick}>
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
