import React from 'react';
import History from '../../services/History';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderBar(props){

    return(
        <div className='header-bar'>

            <div className='header-bar-left' onClick={() => History.goBack()}>
                <FontAwesomeIcon icon="chevron-left"/>
            </div>

            <div className='header-bar-content'>
                {props.title}
            </div>                    

            <div className='header-bar-right' onClick={() => History.push('/about')}>
                <FontAwesomeIcon icon="info"/>
            </div>

        </div>
    );

}

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired
}