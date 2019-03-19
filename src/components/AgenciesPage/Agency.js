import React from 'react';
import PropTypes from 'prop-types';
import history from '../../services/History'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Agency.propTypes={
    agency: PropTypes.object.isRequired
}

export default function Agency(props){

    let {agency} = props;

    if (!agency) return null;

    return (

        <div
            style={{
                padding: 5,
                border: '1px solid black',
                borderRadius: 5,
                marginBottom: 2,
                cursor: 'pointer',
            }}
            onClick={() => history.push('/agency/' + agency.id)}
        >
            
            <div
                style={{
                    fontSize: '1em',
                }}
            >
                {agency.name}
                {
                    agency.islsp === 1 && 
                    <FontAwesomeIcon icon="rocket" style={{fontSize: '0.7em', marginLeft: 5}}/>
                }
            </div>

            <div
                style={{
                    fontSize: '0.7em'
                }}
            >
                {agency.countryCode}
            </div>

        </div>
    );

}

