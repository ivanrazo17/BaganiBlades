"use client";
import { useParams } from 'next/navigation'; // Use useParams to get route parameters
import ProductData from '../ProductData.js';

export default function ProductPage() {
  const { name } = useParams(); // Extract the product name from the URL

  // Replace hyphens with spaces if needed
  const formattedName = name.replace(/-/g, ' ');

  // Fetch the product data based on the formatted name
  const product = ProductData.find(product => product.name === formattedName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div className="price">{product.price}</div>
      <div className="reviews">
        {product.reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.text}</p>
            <p>- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


