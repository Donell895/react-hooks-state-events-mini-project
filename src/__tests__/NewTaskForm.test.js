

import React, { useState } from 'react';

test('Sample Test Case', () => {
  
})
const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const initialFormState = { text: '', category: categories[0] };
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData(initialFormState);
  };

  
  console.log("Here's the form data you're working with");
  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      {}
    </form>
  );
};

export default NewTaskForm;
