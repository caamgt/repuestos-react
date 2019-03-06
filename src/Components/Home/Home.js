import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {SearchForm} from '../SearchForm/SearcForm';
import {MainNavbar} from '../Navbar/MainNavbar';
import {Cards} from '../Cards/Cards';
import './Home.css';

// Conexion a Firebase.
import '../../config/config';
import firebase from 'firebase/app';


export class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {
            repuestos: []
        }
    }

    componentWillMount () {
        const listaRepuestos = [];
        firebase.database().ref('repuestos').once('value').then((snapshot) => {
            snapshot.forEach((childSnap) => {
                const childData = childSnap.val();
                listaRepuestos.push(childData);
            })
        })
        this.setState({repuestos: listaRepuestos});
    }

    // mostrarRepuestos = () => {
    //     return this.state.repuestos.map(producto => {
    //         return <Cards repuestos={this.state.repuestos}/>
    //     });
    // }
    
    render () {
        const repuestos1 = this.state.repuestos;
        console.log(repuestos1);
        return (
            <div>
                <MainNavbar />
                <Row>
                    <Col lg={12}>
                        <h1>Home Page</h1>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className='margen-izuierdo' lg={3} md={3}>
                        <SearchForm />
                    </Col>
                    <Col lg={9} md={9}>
                        <Cards repuestos={this.state.repuestos[0]}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
