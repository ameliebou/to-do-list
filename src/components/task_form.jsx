import React, { Component } from 'react';

class TaskForm extends Component {
  handleSubmit = () => {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task title
          <input type="text" name="title"/>
        </label>
        <label>
          Task description
          <input type="text" name="description"/>
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default TaskForm;
