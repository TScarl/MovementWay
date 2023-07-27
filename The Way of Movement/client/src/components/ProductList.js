import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import CategorySelector from './CategorySelector';
import { useParams } from 'react-router-dom';

export default function ProductList() {
  // Get the 'categoryId' from the URL parameters using the 'useParams' hook
  const { categoryId } = useParams();

  // Use the 'useQuery' hook to fetch products based on the 'categoryId'
  const { loading, error, data } = useQuery(QUERY_PRODUCTS, {
    variables: { category: categoryId ? categoryId : null }, // Pass null if no categoryId is provided
  });

  // State to hold image URLs for the products
  const [imageUrls, setImageUrls] = useState({});

  // Use 'useEffect' to fetch and store image URLs for the products once the data is available
  useEffect(() => {
    const fetchImages = async () => {
      const urls = {};
      // Loop through each product and dynamically import the image module to get its URL
      for (const product of data.products) {
        const imageModule = await import(`../assets/${product.image}`);
        urls[product.image] = imageModule.default;
      }
      // Set the state with the image URLs
      setImageUrls(urls);
    };

    // Fetch images only when data and products are available
    if (data && data.products) {
      fetchImages();
    }
  }, [data]);

  // Handle loading and error states during data fetching
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {/* Render the category selector if categories data is available */}
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
      {/* Render the list of products */}
      <div className="product-list">
        {data.products.map((product) => (
          <div key={product._id} className="product-card">
            {/* Display the product image using the image URL from the state */}
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