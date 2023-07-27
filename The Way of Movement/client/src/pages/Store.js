import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import CategorySelector from '../components/CategorySelector';
import ProductList from '../components/ProductList';

export default function Store() {
  // Query data for categories from the GraphQL server
  const { loading, error, data } = useQuery(QUERY_CATEGORIES);

  // State variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Handle loading and error states for the query
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Function to handle selecting a category
  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      {/* Render the CategorySelector component with the fetched categories */}
      <CategorySelector categories={data.categories} onSelectCategory={handleSelectCategory} />
      {/* Render the ProductList component with the selected category */}
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}