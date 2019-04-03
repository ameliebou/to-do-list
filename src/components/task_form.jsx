import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.name;

    this.setState({
      [value]: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(this.state.title);
    event.preventDefault;
  }

  render() {
    return (
      <div className="task-form">
        <form onSubmit={this.handleSubmit}>
          <label className="d-block">
            <div className="form-name">Task title</div>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label className="d-block">
            <div className="form-name">Task description</div>
            <textarea name="description" value={this.state.description} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" className="d-block" />
        </form>
      </div>
    );
  }
}

export default TaskForm;
