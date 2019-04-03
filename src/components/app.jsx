import React, { Component } from 'react';

import TaskForm from './task_form.jsx';
import TaskList from './task_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'Grocery shopping', description: 'Buy pizza, tomatoes and milk' },
        { title: 'Laundry', description: 'Don\'t forget to separate whites from colors!' },
        { title: 'Plants', description: 'Water them' },
        { title: 'Homework', description: 'Maths and History' }
      ]
    };
  }

  render() {
    return(
      <div className="window">
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
