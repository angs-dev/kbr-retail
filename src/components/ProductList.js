import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
    <section id="products">
        <h2 className="text-center">Our Products</h2>
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    </section>
);

export default ProductList;
