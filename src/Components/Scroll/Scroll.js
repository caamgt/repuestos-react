import React, { Component } from 'react';
import './Scroll.css';

export class Scroll extends Component {
    render() {
        return (
            <div className='divScroll-cafe'>
                {this.props.children}
            </div>
        );
    }
}
