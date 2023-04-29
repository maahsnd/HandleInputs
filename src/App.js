/* 
render an input field and a submit button
handle input field with the logic
submit button adds content from input to 
"tasks array" that is managed in state
*/
import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray: [],
      value: '',
      keyCount: 0
    };
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClickBtn(event) {
    console.log(event.target[0].value);
    this.setState((prevState) => ({
      keyCount: parseInt(prevState.keyCount) + 1,
      taskArray: [
        ...prevState.taskArray,
        {
          task: event.target[0].value,
          key: this.state.keyCount
        }
      ]
    }));
    console.log(this.state.taskArray);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onClickBtn}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <input type="submit" value="Submit"></input>
        <Overview taskarray={this.state.taskArray} />
      </form>
    );
  }
}

export default App;
