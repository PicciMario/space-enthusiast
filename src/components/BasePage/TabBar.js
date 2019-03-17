import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TabBar(props){

    return(
        <div className='tab-bar'>

            <Link to="/" className='tab-bar-button'>
                <div>
                    <span className='tab-bar-button-icon'><FontAwesomeIcon icon="rocket"/></span>
                    <span className='tab-bar-button-title'>Home</span>
                </div>
            </Link>   
            
            <Link to="/agencies" className='tab-bar-button'>
                <div>
                    <span className='tab-bar-button-icon'><FontAwesomeIcon icon="building"/></span>
                    <span className='tab-bar-button-title'>Agencies</span>
                </div>
            </Link>      

            <Link to="/about" className='tab-bar-button'>
                <div>
                    <span className='tab-bar-button-icon'><FontAwesomeIcon icon="info"/></span>
                    <span className='tab-bar-button-title'>About</span>
                </div>
            </Link>                                 

        </div>          
    );

}