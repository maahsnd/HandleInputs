import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid(),
        number: 1
      },
      taskArray: []
    };
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.remove = this.remove.bind(this);
  }
  remove(e) {
    const id = e.target.value;
    const tasks = this.state.taskArray.filter((task) => task.id !== id);
    this.setState({ taskArray: tasks });
  }

  onClickBtn(event) {
    event.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        number: this.state.task.number + 1
      }
    });
  }

  handleChange(event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
        number: this.state.task.number
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onClickBtn}>
          <input
            type="text"
            value={this.state.task.text}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
        <Overview remove={this.remove} tasks={this.state.taskArray} />
      </div>
    );
  }
}

export default App;
