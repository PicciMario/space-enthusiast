import React from 'react';
import PropTypes from 'prop-types';
import ListComponent from '../ListComponent';
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

    if (!props.launch) return null;
    let {name, net, status} = props.launch;

    let date = new Date(net);


    return (
        <ListComponent
            firstRow={name}
            secondRow={date.toString()}   
            icon={statusIcon(status)}
        />
    );

}

