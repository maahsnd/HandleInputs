import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      taskArray: []
    };
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClickBtn(event) {
    event.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      }
    });
    console.log(this.state.taskArray);
  }

  handleChange(event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id
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
        <Overview tasks={this.state.taskArray} />
      </div>
    );
  }
}

export default App;
