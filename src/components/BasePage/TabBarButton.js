import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

TabBarButton.propTypes={

    // Route for this link
    to: PropTypes.string.isRequired,

    // Icon name
    icon: PropTypes.string.isRequired,

    // Button text
    title: PropTypes.string.isRequired

}

export default function TabBarButton(props){
    
    return(
        <Link to={props.to} className='tab-bar-button'>
            <div>
                <span className='tab-bar-button-icon'><FontAwesomeIcon icon={props.icon}/></span>
                <span className='tab-bar-button-title'>{props.title}</span>
            </div>
        </Link>        
    );

}