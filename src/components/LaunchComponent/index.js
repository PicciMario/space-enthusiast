
import React, { Component } from 'react';

class LaunchComponent extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {
            launchID: this.props.match.params.launchID,
            launchData: null
        }

    }

    
    componentDidMount(){
        fetch(
            'https://launchlibrary.net/1.4/launch/' + this.state.launchID
        )        
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            console.log(data);
            this.setState({launchData: data});
        })
    }

    render(){
        return (
            <React.Fragment>
            <h1>LaunchComponent {this.state.launchID}</h1>
            {
                this.state.launchData && this.state.launchData.launches && this.state.launchData.launches.length > 0 &&
                <React.Fragment>
                <h2>{this.state.launchData.launches[0].name}</h2>
                <img src={this.state.launchData.launches[0].rocket.imageURL} style={{width: '100%'}}></img>
                </React.Fragment>
                
            }
            </React.Fragment>

        );
    }

}

export default LaunchComponent;