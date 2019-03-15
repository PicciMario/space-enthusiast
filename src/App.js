import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './App.css'

import HomeComponent from './components/HomePage/';
import AboutComponent from './components/AboutComponent';
import TeamComponent from './components/TeamComponent';
import LaunchComponent from './components/LaunchComponent/';

class App extends Component {

    render(){

        return (
            <Router>
            <div className='app-container'>

                <div className='page-container'>
                    <Route exact path='/' component={HomeComponent}></Route>
                    <Route exact path='/about' component={AboutComponent}></Route>
                    <Route exact path='/team' component={TeamComponent}></Route>
                    <Route path='/launch/:launchID' component={LaunchComponent}></Route>
                </div>

                <div className='tab-bar'>

                    <Link to="/" className='tab-bar-button'>
                        <span>Home</span>
                    </Link>   
                    
                    <Link to="/about" className='tab-bar-button'>
                        <span>About</span>
                    </Link>      

                    <Link to="/team" className='tab-bar-button'>
                        <span>Team</span>
                    </Link>                                 

                </div>                

            </div>
            </Router>
        )
    }
}

export default App;
