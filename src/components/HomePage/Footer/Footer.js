import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{backgroundColor:"#275A53", color:"white"}}>
            <Container className="py-5">
                <Row>
                    <Col sm={5}>
                        <h6 className="pt-4">
                            H#340 (4th Floor), Road #24, <br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                            Phone: 018XXXXXXXX <br />
                            E-mail: info@company.com
                        </h6>
                    </Col>
                    <Col sm={7}>
                        <Row>
                            <Col>
                                <h4 className="mb-4">Company</h4>
                                <span>About</span> <br/>
                                <span>Site Map</span> <br/>
                                <span>Support Center</span> <br/>
                                <span>Terms Comditions</span> <br/>
                                <span>Submit Listing</span>
                            </Col>
                            <Col>
                                <h4 className="mb-4">Quick Links</h4>
                                <span>Quick Links</span> <br/>
                                <span>Rentals</span> <br/>
                                <span>Sales</span> <br/>
                                <span>Contact</span> <br/>
                                <span>Terms Conditons</span> <br/>
                                <span>Our Blogs</span>
                            </Col>
                            <Col>
                                <h4 className="mb-4">About Us</h4>
                                <span>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</span>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;