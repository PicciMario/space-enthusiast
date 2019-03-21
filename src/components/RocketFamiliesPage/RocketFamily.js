import React from 'react';
import PropTypes from 'prop-types';
import ListComponent from '../ListComponent';
import history from '../../services/History'

RocketFamily.propTypes={
    family: PropTypes.object.isRequired
}

export default function RocketFamily(props){

    let {family} = props;

    if (!family) return null;

    return (

        <ListComponent
            onClick={() => history.push('/rocketfamily/' + family.id)}
            firstRow={family.name}
            secondRow={family.agencies && family.agencies.map((agency) => agency.name).join(', ')}
        />

    );

}

