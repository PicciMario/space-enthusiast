import React, { Component } from 'react';

function Page(props){
    return (
        <div
            style={{
                position: 'absolute',
                left: 100,
                width: 400,
                top: 10,
                bottom: 100,
                clear: "both",
                border: '1px solid black'
            }}
        >
            {props.children}
        </div>
    );
}

export default Page;