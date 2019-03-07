import React, { Component } from 'react';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {Logo} from '../Logo/Logo';
import {FacebookIcon} from '../FacebookIcon/FacebookIcon';
import {InstagramIcon} from '../InstagramIcon/InstagramIcon';
import {WhatsappIcon} from '../WhatsappIcon/WhatsappIcon';
import {Link} from 'react-router-dom';
import './MainNavbar.css';

export class MainNavbar extends Component {
    render() {
        return (
            <div className='sticky-top menu-principal'>
            <Container>
                    <Row>
                        <Col lg={6}>
                            <Logo />
                        </Col>
                        <Col lg={6}>
                            <WhatsappIcon />
                            <FacebookIcon />
                            <InstagramIcon />
                        </Col>
                    </Row>
                
                <Navbar className="justify-content-end" sticky="top" bg="light" variant="light">
                
                    <Nav className="justify-content-end">
                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/comollegar'} className='nav-link'>Como llegar</Link>
                        <Link to={'/acercade'} className='nav-link'>Acerca de</Link>
                    </Nav>
                    
                </Navbar>
            </Container>
            </div>
        );
    }
}