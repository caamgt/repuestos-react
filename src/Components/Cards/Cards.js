import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import './Cards.css';

export class Cards extends Component {

    static propTypes = {
        id: PropTypes.string,
        descripcion: PropTypes.string,
        img: PropTypes.string
    }
    
    render() {
        const {id, descripcion, img, marca} = this.props;
        return (
            <Card style={{ width: '16rem', height:'18rem'}}>
                <Card.Img 
                    className='imagenT justify-content-center' 
                    variant="top" 
                    src={img}
                />
                <Card.Body>
                    <Card.Title>{descripcion}</Card.Title>
                    <Card.Text>
                    {marca}
                    </Card.Text>
                    <Link to={`details/${id}`}>
                        <Button variant="primary">M&aacute;s informaci&oacute;n</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}