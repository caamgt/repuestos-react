import React, { Component } from 'react';
import '../config/config';
import * as firebase from 'firebase/app';
import { PropTypes } from 'prop-types';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, Alert, Button } from 'react-bootstrap';
import {WhatsappIcon} from '../Components/WhatsappIcon/WhatsappIcon';
import './Details.css';
import  {ContactUsBtn} from '../Components/ContactUsBtn/ContactUsBtn';

export class Details extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {repuesto: {} }

    _fetchRepuesto = ({id}) => {
        const db = firebase.database();
        const dbRef = db.ref().child('repuestos');

        dbRef.on('value', snapshot => {
            snapshot.forEach( (childSnapshot) => {
                const childData = childSnapshot.val();
                if (childData.id === id) {
                    this.setState({repuesto: childData});
                }
            })
        })
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        this._fetchRepuesto({id});
    }

    render() {
        const {descripcion, img, marca, linea, modelo, motor} = this.state.repuesto;
        return (
          <div>
            <div className="pt-5 animated fadeIn">
              <Container>
                <Row>
                  <Col lg={6}>
                    <Card border="light">
                        <figure className="detail-img text-center">
                        <img src={img} alt="" />
                        </figure>
                    </Card>
                    <Link to={'/'}>
                        <Button variant="primary">Regresar</Button>
                    </Link>
                  </Col>
                  <Col lg={6}>
                    <Card border="light">
                      <Card.Body>
                        <Card.Title>{descripcion}</Card.Title>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <strong>Marca:</strong>&nbsp;{marca}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong>Linea:</strong>&nbsp;{linea}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong>Modelo:</strong>&nbsp;{modelo}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong>Motor:</strong>&nbsp;{motor}&nbsp;cc
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                    <Alert variant="success">
                      <Alert.Heading>Más información</Alert.Heading>
                      <p>
                        Para más informsción, puede escribirnos al
                        Whatsapp <WhatsappIcon />
                      </p>
                    </Alert>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-center' lg={12}>
                    <ContactUsBtn />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
    }
}
