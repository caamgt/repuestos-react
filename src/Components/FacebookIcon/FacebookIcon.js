import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import './FacebookIcon.css';

export const FacebookIcon = () => {
    return (
        <a className='alinar-derecha facebookIcon-color' rel="noopener noreferrer" target='_blank' href='https://es-la.facebook.com/pages/category/Automotive-Parts-Store/Repuestos-Grupo-Los-Tres-961051794043883/'>
            <FontAwesomeIcon
                icon={faFacebookSquare}
                size='3x'
            />
        </a>
    );
}