import React from 'react';
import HeaderBar from './HeaderBar';
import TabBar from './TabBar';

export default function Page(props){

    return(

        <React.Fragment>
                
            <HeaderBar title={props.title}/>

            <div className='page-container'>
                {props.children}
            </div>

            <TabBar/>

        </React.Fragment>        

    );

}
