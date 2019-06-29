import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {SearchBox} from '../SearchBox/SearchBox.jsx';
import {SearchMarca} from '../SearchMarca/SearchMarca';
import './SearchForm.css';

export class SearchForm extends Component {
    render() {
        const {searchChange, onCheckBox} = this.props;
        return (
            <Form className='borde-form'>
                <Form.Group controlId="formBasicEmail">
                    <SearchBox searchChange={searchChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Marca</Form.Label>
                    <SearchMarca searchChange={searchChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Buscar
                </Button>
            </Form>
        );
    }
}