import React, { Component } from 'react';
import * as LaunchLibrary from '../LaunchLibrary';
import Launch from './Launch';
import Page from '../Components/Page';

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

        return(
            <Page title="Space Enthusiast">
                <h1>Space Enthusiast</h1>
                <h3>Upcoming launches:</h3>
                {
                    this.state.launches.map((launch) => 
                        <div onClick={() => this.props.history.push('/launch/' + launch.id)} key={launch.id}>
                            <Launch launch={launch}/>
                        </div>
                    )
                }            
            </Page>
        );

    }
    
}

export default HomeComponent;