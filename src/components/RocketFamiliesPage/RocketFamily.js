import React from 'react';
import PropTypes from 'prop-types';
import history from '../../services/History'

RocketFamily.propTypes={
    family: PropTypes.object.isRequired
}

export default function RocketFamily(props){

    let {family} = props;

    if (!family) return null;

    return (

        <div
            style={{
                padding: 5,
                border: '1px solid black',
                borderRadius: 5,
                marginBottom: 2,
                cursor: 'pointer',
            }}
            onClick={() => history.push('/rocketfamily/' + family.id)}
        >
            
            <div
                style={{
                    fontSize: '1em',
                }}
            >
                {family.name}
            </div>

            <div
                style={{
                    fontSize: '0.8em',
                }}
            >
                {
                    family.agencies &&
                    family.agencies.map((agency) => agency.name).join(', ')
                }
            </div>            
            

        </div>
    );

}

