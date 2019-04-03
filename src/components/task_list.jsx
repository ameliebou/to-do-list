import React, { Component } from 'react';
import Task from './task.jsx';

class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
        {this.props.tasks.map((task, index) => {
          return (
            <Task title={task.title} description={task.description} key={index}/>
          )
        })};
      </div>
    );
  }
}

export default TaskList;
