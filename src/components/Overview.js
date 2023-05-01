import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <li>
              {task.number + ': '}
              {task.text}
            </li>
            <button value={task.id} onClick={props.remove}>
              Delete
            </button>
            <button value={task.id} onClick={props.edit}>
              Edit
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
