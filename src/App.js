import React, { Component } from 'react';

import {
    Route
} from 'react-router-dom';

import './App.css'

import HomeComponent from './components/HomePage/';
import AboutComponent from './components/AboutComponent';
import TeamComponent from './components/TeamComponent';
import LaunchComponent from './components/LaunchComponent/';

// ##### Costruzione libreria icone FontAwesome ###############################
import {library } from '@fortawesome/fontawesome-svg-core'
import {faHome, faRocket, faChevronLeft, faInfo} from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faRocket, faChevronLeft, faInfo);
// ############################################################################

class App extends Component {

    render(){

        return (
            <div className='app-container'>
                <Route exact path='/' component={HomeComponent}></Route>
                <Route exact path='/about' component={AboutComponent}></Route>
                <Route exact path='/team' component={TeamComponent}></Route>
                <Route path='/launch/:launchID' component={LaunchComponent}></Route>
            </div>
        )
    }
}

export default App;
