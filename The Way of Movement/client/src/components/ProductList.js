import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import CategorySelector from './CategorySelector';
import { useParams } from 'react-router-dom';

export default function ProductList() {
  const { categoryId } = useParams();
  const { loading, error, data } = useQuery(QUERY_PRODUCTS, {
    variables: { category: categoryId ? categoryId : null }, // Pass null if no categoryId is provided
  });

  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const urls = {};
      for (const product of data.products) {
        const imageModule = await import(`../assets/${product.image}`);
        urls[product.image] = imageModule.default;
      }
      setImageUrls(urls);
    };

    if (data && data.products) {
      fetchImages();
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="category-selector">
        {data && data.categories && (
          <CategorySelector
            categories={data.categories}
            onSelectCategory={(categoryId) => {
              // Handle category selection here if needed
            }}
          />
        )}
      </div>
      <div className="product-list">
        {data.products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={imageUrls[product.image]} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-quantity">Quantity: {product.quantity}</p>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}