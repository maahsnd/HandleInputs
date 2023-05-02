import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskArray: [],
      task: {
        text: '',
        id: uniqid(),
        number: 1,
        editing: false
      },
      editText: ''
    };
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  edit(e) {
    const uniqId = e.target.value;
    console.log(this.state.editText);
    const newTaskArr = [...this.state.taskArray];
    let index = newTaskArr.findIndex((el) => (el.id = uniqId));
    newTaskArr[index].editing = true;
    console.log(newTaskArr[index].text);
    this.setState({
      editText: newTaskArr[index].text
    });
    this.setState({ taskArray: newTaskArr });
  }

  remove(e) {
    const id = e.target.value;
    const tasks = this.state.taskArray.filter((task) => task.id !== id);
    this.setState({ taskArray: tasks });
  }

  onClickBtn(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        number: this.state.task.number + 1,
        editing: false
      },
      editText: ''
    });
  }
  submitEdit(e) {
    const uniqId = e.target.value;
    const newTaskArr = [...this.state.taskArray];
    let index = newTaskArr.findIndex((el) => (el.id = uniqId));
    const editedText = this.state.editText;
    this.setState({
      taskArray: newTaskArr,
      task: {
        text: editedText,
        id: newTaskArr[index].id,
        number: newTaskArr[index].number,
        editing: false
      },
      editText: ''
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

  handleEdit(event) {
    console.log(this.state.task.text);
    this.setState({
      editText: event.target.value
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
        <Overview
          submit={this.onClickBtn}
          remove={this.remove}
          handleEdit={this.handleEdit}
          tasks={this.state.taskArray}
          submitEdit={this.submitEdit}
          edit={this.edit}
          editText={this.state.editText}
        />
      </div>
    );
  }
}

export default App;
