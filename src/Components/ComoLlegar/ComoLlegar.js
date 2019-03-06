import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Mapa from '../Mapa/Mapa';

export class ComoLlegar extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Mapa />
                </Col>
            </Row>
        </Container>
      )
    }
}
