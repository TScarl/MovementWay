import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import CategorySelector from '../components/CategorySelector';
import ProductList from '../components/ProductList';

export default function Store() {
  const { loading, error, data } = useQuery(QUERY_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <CategorySelector categories={data.categories} onSelectCategory={handleSelectCategory} />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}