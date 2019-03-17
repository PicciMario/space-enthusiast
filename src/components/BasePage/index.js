import React from 'react';
import HeaderBar from './HeaderBar';
import TabBar from './TabBar';

export default function Page(props){

    return(

        <React.Fragment>
                
            <HeaderBar title={props.title}/>

            {
                props.fixedHeader && 
                <div 
                    style={{
                        marginLeft: 5,
                        marginRight: 5,
                        marginBottom: 5
                    }}
                >
                    {props.fixedHeader}
                </div>
            }

            <div className='page-container'>
                {props.children}
            </div>

            {
                props.fixedFooter && 
                <div 
                    style={{
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 5
                    }}
                >
                    {props.fixedFooter}
                </div>
            }

            <TabBar/>

        </React.Fragment>        

    );

}
