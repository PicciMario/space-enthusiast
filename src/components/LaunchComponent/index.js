
import React, { Component } from 'react';
import * as LaunchLibrary from '../LaunchLibrary';

class LaunchComponent extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {
            launchData: null,
            error: false,
            loading: true
        }

    }

    componentDidMount(){
        LaunchLibrary
            .launchByID(this.props.match.params.launchID)
            .then((data) => {
                if (data && data.launches && data.launches.length > 0){
                    this.setState({
                        launchData: data.launches[0],
                        error: false,
                        loading: false
                    })
                }
                else {
                    this.setState({
                        launchData: null,
                        error: true,
                        loading: false
                    })
                }
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    launchData: null,
                    error: true,
                    loading: false
                })                
            })
    }

    render(){

        let {launchData, loading, error} = this.state;

        if (loading || !launchData){
            return <div>Loading...</div>
        }

        if (error){
            return <div>Loading error.</div>
        }

        return (
            <React.Fragment>
            <h1>LaunchComponent {launchData.launchID}</h1>
            <h2>{launchData.name}</h2>
            <div>NET: {launchData.net}</div>
            <img src={launchData.rocket.imageURL} style={{width: '100%'}}></img>
            </React.Fragment>

        );
    }

}

export default LaunchComponent;