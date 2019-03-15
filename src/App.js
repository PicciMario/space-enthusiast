import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Page from './components/Page'

import HomeComponent from './components/HomePage/';
import AboutComponent from './components/AboutComponent';
import TeamComponent from './components/TeamComponent';
import LaunchComponent from './components/LaunchComponent/';

class App extends Component {
    render(){
        return (
            <Router>
            <div>
                              
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                    <li>
                        <Link to="/team"> Team </Link>
                    </li>
                </ul>                    
                <Route exact path='/' component={HomeComponent}></Route>
                <Route exact path='/about' component={AboutComponent}></Route>
                <Route exact path='/team' component={TeamComponent}></Route>
                <Route path='/launch/:launchID' component={LaunchComponent}></Route>

            </div>
            </Router>
        )
    }
}

export default App;
