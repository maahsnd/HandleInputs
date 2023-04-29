/* should render tasks 
render a html list element for each task in "tasks array"
use map function to iterate over tasks array (give each item a unique key)*/
import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: props
    };
    this.process = this.process.bind(this);
  }

  process() {
    console.log(this.state);
    return <p key={this.state.taskList[0]}>{this.state.taskList[0]} </p>;
  }

  render() {
    return <div>{this.process()}</div>;
  }
}

export default Overview;
