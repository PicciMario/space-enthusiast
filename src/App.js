import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import TeamComponent from './TeamComponent';

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

            </div>
            </Router>
        )
    }
}

export default App;
