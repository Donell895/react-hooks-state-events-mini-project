import React, { useState } from 'react';

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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Text:
        <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
      </label>
      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleInputChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
