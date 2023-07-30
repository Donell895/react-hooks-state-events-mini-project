import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

const App = () => {
  const initialTasks = [
    { text: 'Buy rice', category: 'Food' },
    { text: 'Save a tenner', category: 'Money' },
    { text: 'Build a todo app', category: 'Code' },
    { text: 'Build todo API', category: 'Code' },
    { text: 'Get an ISA', category: 'Money' },
    { text: 'Cook rice', category: 'Food' },
    { text: 'Tidy house', category: 'Misc' },
  ];

  const initialCategories = ['All', 'Code', 'Food', 'Money', 'Misc'];

  const [tasks, setTasks] = useState(initialTasks);
  const [categories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <h1>Task Manager</h1>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onCategoryFilter={handleCategoryFilter} />
      <TaskList tasks={filteredTasks} />
      <NewTaskForm categories={categories.filter((category) => category !== 'All')} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
};

export default App;
