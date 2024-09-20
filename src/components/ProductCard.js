import React from 'react';

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <a href={product.googleFormLink} target="_blank" rel="noopener noreferrer">
            Order Now
        </a>
    </div>
);

export default ProductCard;
