import React from 'react';
import TabBarButton from './TabBarButton';

export default function TabBar(props){

    return(
        <div className='tab-bar'>

            <TabBarButton
                to={'/'}
                title={'Home'}
                icon={'rocket'}
            />   

            <TabBarButton
                to={'/agencies'}
                title={'Agencies'}
                icon={'building'}
            />

            <TabBarButton
                to={'/about'}
                title={'About'}
                icon={'info'}
            />                                                        

        </div>          
    );

}