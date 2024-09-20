import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

const products = [
    {
        name: 'Product 1',
        description: 'This is a great product.',
        price: '$20',
        image: '/images/product1.jpg',
        googleFormLink: 'https://forms.gle/exampleProduct1'
    },
    {
        name: 'Product 2',
        description: 'This is another great product.',
        price: '$30',
        image: '/images/product2.jpg',
        googleFormLink: 'https://forms.gle/exampleProduct2'
    }
];

const App = () => (
    <div>
        <Header />
        <main>
            <ProductList products={products} />
        </main>
        <Footer />
    </div>
);

export default App;
