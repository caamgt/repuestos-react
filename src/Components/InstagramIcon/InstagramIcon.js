import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import './InstagramIcon.css';

export const InstagramIcon = () => {
    return (
        <div className='alinar-derecha instagramIcon-color'>
            <FontAwesomeIcon 
                icon={faInstagram}
                size='3x'
            />
        </div>
    );
}
