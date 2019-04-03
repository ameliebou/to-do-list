import React, { Component } from 'react';

import tasks from '../../data/tasks.js';
import TaskForm from './task_form.jsx';
import TaskList from './task_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    };
  }

  render() {
    return(
      <div className="window" style={{backgroundImage: `url(https://images.unsplash.com/photo-1529321440961-39288681287f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`}}>
        <div className="app-title">
          <h1>Amélie's To do list</h1>
        </div>
        <TaskForm />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
};
export default App;
