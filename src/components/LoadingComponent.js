import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LoadingComponent(props){
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}
        >
            <span
                style={{
                    fontSize: '2em',
                    marginBottom: 20
                }}
            >
                Loading...
            </span>
            <FontAwesomeIcon
                icon='rocket'
                size='4x'
                spin
            />            
        </div>
    );
}