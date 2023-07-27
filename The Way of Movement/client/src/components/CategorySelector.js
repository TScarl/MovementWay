import React from 'react';
import { Link } from 'react-router-dom';

// CategorySelector component displays a list of categories as links in a sidebar
// Props:
// - categories: An array of category objects to display in the selector
// - onSelectCategory: Callback function to handle clicking on a category link

export default function CategorySelector({ categories, onSelectCategory }) {
  return (
    <div className="category-selector">
      <ul>
        {/* Map through the categories array and create a list item for each category */}
        {categories.map((category) => (
          <li key={category._id}>
            {/* Render a Link component for each category to navigate to its products page */}
            {/* Set the link to `/products/{category._id}` and call onSelectCategory when clicked */}
            <Link to={`/products/${category._id}`} onClick={() => onSelectCategory(category._id)}>
              {/* Display the category name as the link text */}
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};