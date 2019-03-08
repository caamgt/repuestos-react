import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import '../config/config';
import { Container, Row, Col } from 'react-bootstrap';
import {SearchForm} from '../Components/SearchForm/SearcForm.jsx';
import { CardList } from '../Components/CardList/CardList';
import { CargandoIcono } from '../Components/CargandoIcono/CargandoIcono';
import { ContactUs } from '../Components/ContactUs/ContactUs';

export class Home extends Component {

    constructor () {
        super()
        this.state = {
          repuestos: [],
          searchfield: '',
          repuesto: [],
          checkField: []
        }
      }

    componentDidMount() {
        const db = firebase.database();
        const dbRef = db.ref().child('repuestos');
        
        dbRef.on('value', snapshot => {
            this.setState({
            repuestos: snapshot.val()
            });
        })
    }

    _onSearchChange = (event) => {
        return this.setState({searchfield: event.target.value});
    }

    _onCheckBox = (e) => {
        if (e.target.checked) {
            return this.setState({searchfield: e.target.value});
        } else {
            return this.setState({searchfield: ''});
        }
        
        
    }

    render() {
        const filterRepuestos = this.state.repuestos.filter(repuesto => {
            return repuesto.descripcion.toLowerCase().includes(this.state.searchfield.toLowerCase()) || repuesto.marca.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.repuestos.length === 0) {
            return(<CargandoIcono />);
        } else {
            return(
                <div>
                    <Container>
                        <Row>
                            <Col lg={12}>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col style={{paddingTop: '20px'}} lg={3} md={3}>
                                <Row>
                                    <Col lg={12}>
                                        <SearchForm searchChange={this._onSearchChange } onCheckBox={this._onCheckBox}/>
                                    </Col>
                                    <Col lg={12} style={{paddingTop: '20px'}}>
                                        <ContactUs />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={9} md={9}>
                                <CardList repuestos={filterRepuestos} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}