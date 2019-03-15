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

        let buttonStyle = {
            border: '1px solid black',
            padding: 5,
            flexGrow: 1,
            textAlign: 'center',
            textDecoration: 'none'
        }

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
                        Home
                    </Link>   
                    
                    <Link to="/about" className='tab-bar-button'>
                        About
                    </Link>      

                    <Link to="/team" className='tab-bar-button'>
                        Team
                    </Link>                                 

                </div>                

            </div>
            </Router>
        )
    }
}

export default App;
