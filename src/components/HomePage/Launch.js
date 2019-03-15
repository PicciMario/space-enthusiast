import React from 'react';
import PropTypes from 'prop-types';

Launch.propTypes={
    launch: PropTypes.object.isRequired
}

export default function Launch(props){

    let {launch} = props;

    if (!launch) return null;

    return (

        <div
            style={{
                padding: 5,
                border: '1px solid black',
                borderRadius: 5,
                marginBottom: 2,
                cursor: 'pointer'
            }}
        >
            
            <div
                style={{
                    fontSize: '1em',
                }}
            >
                {launch.name}
            </div>

            <div
                style={{
                    fontSize: '0.8em'
                }}
            >
                {launch.net}
            </div>

        </div>
    );

}

