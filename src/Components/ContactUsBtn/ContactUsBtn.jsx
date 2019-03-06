import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import {ContactUs} from '../ContactUs/ContactUs';

export class ContactUsBtn extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
        return (
          <>
            <Button variant="primary" onClick={this.handleShow}>
              Cont&aacute;ctanos
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                
              </Modal.Header>
              <Modal.Body><ContactUs /></Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={this.handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
}
