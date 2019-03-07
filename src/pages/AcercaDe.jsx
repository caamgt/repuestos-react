import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AcercaDeTexto } from "../Components/AcercaDeTexto/AcercaDeTexto";
import { AcercaDeImg } from "../Components/AcercaDeImg/AcercaDeImg";
import './AcercaDe.css';

export class AcercaDe extends Component {
  render() {
    return (
        <div className='pt-4'>
            <Container>
                <Row>
                    <Col lg={6} className='text-center acercadeimg'>
                        <figure>
                            <AcercaDeImg />
                        </figure>
                    </Col>
                    <Col lg={6}>
                        <AcercaDeTexto />
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}
