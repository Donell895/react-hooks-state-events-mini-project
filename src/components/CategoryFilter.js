import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryFilter }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => onCategoryFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
