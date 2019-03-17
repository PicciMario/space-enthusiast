import React from 'react';
import PropTypes from 'prop-types';

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
        >
            
            <div
                style={{
                    fontSize: '1em',
                }}
            >
                {agency.name}
            </div>

            <div
                style={{
                    fontSize: '0.8em'
                }}
            >
                {agency.net}
            </div>

        </div>
    );

}

