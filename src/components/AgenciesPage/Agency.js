import React from 'react';
import PropTypes from 'prop-types';
import history from '../../services/History'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListComponent from '../ListComponent';

Agency.propTypes={
    agency: PropTypes.object.isRequired
}

export default function Agency(props){

    let {agency} = props;

    if (!agency) return null;

    return (

        <ListComponent
            firstRow={agency.name}
            secondRow={agency.countryCode}
            icon={agency.islsp === 1 && <FontAwesomeIcon icon="rocket" alt='launch provider'/>}
            iconTooltip={'Is a launch provider.'}
            onClick={() => history.push('/agency/' + agency.id)}
        />

    );

}

