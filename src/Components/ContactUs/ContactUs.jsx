import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Obfuscate from 'react-obfuscate';
import './ContactUs.css';

export const ContactUs = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Cont&aacute;ctanos</Card.Title>
                <ListGroup className='contactus'>
                    <ListGroup.Item>
                        Telefono:&nbsp;<Obfuscate tel='2301-0000' />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Whatsapp:&nbsp;<Obfuscate  tel='3128-9098'/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Email:&nbsp;
                            <Obfuscate 
                                email='repuestos@grupolostres.com'
                                headers={{
                                    cc: 'spgarcia@grupolostres.com',
                                    subject: 'Estor buscando el repuesto',
                                    body: 'Buenos dias, estoy buscando un repuesto'
                                }}
                            />
                    </ListGroup.Item>
                    <ListGroup.Item><strong>Direcci&oacute;n:</strong>&nbsp;Boulevar liberaci&oacute;n 1-87 zona 9</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}