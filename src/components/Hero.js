import React from 'react';
import { Button } from 'react-bootstrap';

const Hero = () => (
    <section className="hero-section">
        <div className="hero-image">
            <div className="hero-overlay">
                <h1>Welcome to KBR Retail</h1>
                <p>Your One-Stop Shop for Devotional Products</p>
                <Button href="#products" variant="primary" size="lg">Explore Products</Button>
            </div>
        </div>
    </section>
);

export default Hero;
