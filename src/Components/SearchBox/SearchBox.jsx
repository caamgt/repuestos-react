import React, { Component } from 'react';
import {Form, InputGroup} from 'react-bootstrap';
import {SearchIcon} from '../SearchIcon/SearchIcon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export class SearchBox extends Component {
    render () {
        return (
            <InputGroup>
                <Form.Control 
                    type="text" 
                    placeholder="Buscar Repuesto"
                    onChange={this.props.searchChange}
                />
                <InputGroup.Append>
                    <InputGroup.Text><SearchIcon icon={faSearch}/></InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}
