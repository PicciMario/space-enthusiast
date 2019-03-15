import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import * as LaunchLibrary from '../LaunchLibrary'
import Launch from './Launch'

class HomeComponent extends Component{

    constructor(props){

        super(props);

        this.state = {
            launches: []
        }

    }

    componentDidMount(){
        LaunchLibrary.nextLaunches(10)
        .then((data) => {
            this.setState({launches: data.launches});
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Home Component</h1>
                {
                    this.state.launches.map((launch) => 
                        <div onClick={() => this.props.history.push('/launch/' + launch.id)} key={launch.id}>
                            <Launch launch={launch}/>
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
    
}

export default HomeComponent;