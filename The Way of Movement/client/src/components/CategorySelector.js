import React from 'react';
import { Link } from 'react-router-dom';

export default function CategorySelector({ categories, onSelectCategory }) {
  return (
    <div className="category-selector">
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <Link to={`/products/${category._id}`} onClick={() => onSelectCategory(category._id)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}