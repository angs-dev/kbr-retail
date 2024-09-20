import React from 'react';

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>Price: {product.price}</strong></p>
        <a href={product.googleFormLink} target="_blank" rel="noopener noreferrer" className="btn btn-success">
            Order Now
        </a>
    </div>
);

export default ProductCard;
