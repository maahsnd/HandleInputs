import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  const editEl = (task) => {
    return (
      <li>
        <input
          type="text"
          value={props.editText}
          onChange={props.handleEdit}
        ></input>
        <button value={task.id} onClick={props.submitEdit}>
          Submit
        </button>
      </li>
    );
  };
  const standardEl = (task) => {
    return (
      <li>
        {task.number + ': '}
        {task.text}
        <button value={task.id} onClick={props.remove}>
          Delete
        </button>
        <button value={task.id} onClick={props.edit}>
          Edit
        </button>
      </li>
    );
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            {task.editing ? editEl(task) : standardEl(task)}{' '}
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
