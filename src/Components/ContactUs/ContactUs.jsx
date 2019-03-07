import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Obfuscate from 'react-obfuscate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';

export const ContactUs = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Cont&aacute;ctanos</Card.Title>
                <ListGroup className='contactus'>
                    <ListGroup.Item>
                        <FontAwesomeIcon icon={faPhoneSquare}/>&nbsp;<Obfuscate tel='2301-0000' />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon icon={faWhatsappSquare}/>&nbsp;<Obfuscate  tel='3128-9098'/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon icon={faEnvelopeSquare}/>&nbsp;
                            <Obfuscate 
                                email='rp@grupolostres.com'
                                headers={{
                                    cc: 'spgarcia@grupolostres.com',
                                    subject: 'Estor buscando el repuesto',
                                    body: 'Buenos dias, estoy buscando un repuesto'
                                }}
                            />
                    </ListGroup.Item>
                    <ListGroup.Item><strong><FontAwesomeIcon icon={faMapMarkerAlt}/></strong>&nbsp;Boulevar liberaci&oacute;n 1-87 zona 9</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}