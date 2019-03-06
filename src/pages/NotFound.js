import React from 'react';
import './NotFound.css';
import NotFoundImage from './NotFound.png';

export const NotFound = () =>{
    return (
        <div className='notFound'>
            <h1>404!</h1>
            <p>No existe esta página</p>
            <figure>
                <img src={NotFoundImage} alt=""/>
            </figure>
        </div>
    );
}