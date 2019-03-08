import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class SearchMarca extends Component {
    render() {
        return(
            <Form.Control as="select" onChange={this.props.searchChange}>
                <option></option>
                <option>Volvo</option>
                <option>Porsche</option>
                <option>Mini Cooper</option>
                <option>Mahindra</option>
                <option>ZX auto</option>
            </Form.Control>
        );            
    }
}