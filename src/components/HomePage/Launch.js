import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Launch.propTypes={
    launch: PropTypes.object.isRequired
}

function statusIcon(status){

    let iconName = '';
    let iconColor = '';

    switch (status){

        case 1: //Go
            iconName = 'thumbs-up';
            iconColor = 'green';
            break;

        case 3: //Success
            iconName = 'check';
            iconColor = 'green';
            break;        

        case 4: //Failure
            iconName = 'times';
            iconColor = 'red';
            break;             

        case 2: //TBD
        case 5: //Hold
        default:
            iconName = 'question-circle';
            iconColor = '#e0e007';
            break;

    }

    return <FontAwesomeIcon icon={iconName} color={iconColor}/>

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
                cursor: 'pointer',
                display: 'flex'
            }}
        >

            <div
                style={{
                    flexGrow: 1
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

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 30,
                    fontSize: '1.3em'
                }}
            >
                {statusIcon(launch.status)}
            </div>

        </div>
    );

}

