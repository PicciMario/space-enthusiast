import React, { Component } from 'react';

import {
    Route
} from 'react-router-dom';

import './App.css'

import HomePage from './components/HomePage/';
import AboutPage from './components/AboutPage/';
import LaunchPage from './components/LaunchPage/';
import AgenciesPage from './components/AgenciesPage/';
import AgencyPage from './components/AgencyPage/';
import RocketFamiliesPage from './components/RocketFamiliesPage'

// ##### Costruzione libreria icone FontAwesome ###############################

import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome, faRocket, faChevronLeft, faInfo, faBuilding, faLink, faSpaceShuttle} from '@fortawesome/free-solid-svg-icons';
import {faYoutube, faWikipediaW, faTwitter, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
library.add(
    faHome, faRocket, faChevronLeft, faInfo, faBuilding, faLink, faSpaceShuttle,
    faYoutube, faWikipediaW, faTwitter, faFacebook, faLinkedin
);

console.log(library)

// ############################################################################

class App extends Component {

    render(){

        return (
            <div className='app-container'>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/about' component={AboutPage}></Route>
                <Route exact path='/agencies' component={AgenciesPage}></Route>
                <Route exact path='/rocketfamilies' component={RocketFamiliesPage}></Route>
                <Route path='/agency/:agencyID' component={AgencyPage}></Route>
                <Route path='/launch/:launchID' component={LaunchPage}></Route>
            </div>
        )
    }
}

export default App;
