import React, { Component } from 'react';
import {Cards} from '../Cards/Cards';
import { Row, Col } from 'react-bootstrap';
import {PropTypes} from 'prop-types';

import './CardList.css';
export class CardList extends Component {

    static propTypes = {
        repuesto: PropTypes.array
    }

    render () {
        const {repuestos} = this.props;
        return (
            <Row className='animated fadeIn'>
                {
                    repuestos.map( (repuesto) => {
                        return (
                            <Col lg={4} style={{paddingTop: '20px'}} key={repuesto.id}>
                                <Cards
                                    id={repuesto.id} 
                                    marca={repuesto.marca} 
                                    img={repuesto.img}
                                    descripcion={repuesto.descripcion}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        );
    }
}
