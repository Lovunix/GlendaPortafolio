import React from 'react';
import { Row, Container,Col} from 'react-bootstrap';
import "./style.css";


function Chero () {
    return (
            <Container fluid>
                <Row >
                    <Col id="photo_profile"  lg={4}md={4} sm={4}></Col>
                    <Col id="background_scene"  lg={8}md={8} sm={8}>
                    <h4>She Codes: Empowering Women in Tech</h4></Col>
                    <Col id="cool_stuff" lg={12}md={12} sm={12}>
                    <h2>"A woman is like a tea bag - you never know how strong she is until she gets in hot water."</h2></Col>
                </Row>
            </Container>
    );
}

export default Chero;