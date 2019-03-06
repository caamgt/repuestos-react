import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {SearchBox} from '../SearchBox/SearchBox';
import './SearchForm.css';

export class SearchForm extends Component {
    render() {
        const {searchChange} = this.props;
        return (
            <Form className='borde-form'>
                <Form.Group controlId="formBasicEmail">
                    <SearchBox searchChange={searchChange}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control as="select">
                        <option>Volvo</option>
                        <option>Porsche</option>
                        <option>Mini Cooper</option>
                        <option>Mahindra</option>
                        <option>ZX auto</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Buscar
                </Button>
            </Form>
        );
    }
}