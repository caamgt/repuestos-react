import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
import './WhatsappIcon.css';

export const WhatsappIcon = () => {
    return(
        <a className='alinar-derecha whatsappIcon-color' rel="noopener noreferrer" target="_blank" href='https://wa.me/50231289139'>
            <FontAwesomeIcon
                icon={faWhatsappSquare}
                size='3x'
            />
            
        </a>
    );
}
