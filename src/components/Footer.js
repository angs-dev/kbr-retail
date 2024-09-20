import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
    <footer className="footer-section">
        <Container>
            <Row>
                <Col md={4}>
                    <h5>Contact Us</h5>
                    <p>No.6F MEETU, Mettu St, Kundrathur, Chennai</p>
                    <p>Tamil Nadu, India 600069</p>
                </Col>
                <Col md={4}>
                    <h5>Follow Us</h5>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </Col>
                <Col md={4}>
                    <h5>Newsletter</h5>
                    <p>Subscribe to get the latest news and offers!</p>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <p>&copy; 2024 KBR Retail. All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
