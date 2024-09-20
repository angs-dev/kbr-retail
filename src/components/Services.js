import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => (
    <section id="services" className="services-section">
        <Container>
            <Row>
                <Col md={4} className="service-item">
                    <img src="/images/icon1.png" alt="Service 1" />
                    <h3>Devotional Products</h3>
                    <p>We offer a wide range of devotional products for your spiritual journey.</p>
                </Col>
                <Col md={4} className="service-item">
                    <img src="/images/icon2.png" alt="Service 2" />
                    <h3>Special Offers</h3>
                    <p>Exclusive discounts on our best-selling devotional items.</p>
                </Col>
                <Col md={4} className="service-item">
                    <img src="/images/icon3.png" alt="Service 3" />
                    <h3>Personalized Guidance</h3>
                    <p>Get expert advice on choosing the right devotional items for you.</p>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Services;
