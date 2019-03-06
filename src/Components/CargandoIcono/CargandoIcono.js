import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import './CargandoIcono.css';

export const CargandoIcono = () => {
    return (
        <div className='Centrar-contenido pt-5'>
            <FontAwesomeIcon icon={faSpinner} pulse size="6x"/>
        </div>
    );
}
