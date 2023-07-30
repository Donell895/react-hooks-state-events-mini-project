import React from 'react';


test('Sample Test Case', () => {
  
})
const Task = ({ text, category }) => {
  return (
    <div className="task">
      <span>{text}</span>
      <span>{category}</span>
      <button>Delete</button>
    </div>
  );
};

export default Task;
