
import React from 'react';
import Page from '../BasePage/';
import { connect } from "react-redux";
import * as Actions from '../../redux/actions';

class LaunchComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        let {launchID} = this.props.match.params;
        this.props.retrieveLaunch(launchID);
        this.props.retrieveLaunchStatuses();
    }

    render(){

        let {launchID} = this.props.match.params;
        let launchData = this.props.launches.details[launchID];

        let pageContent = null;
        if (!launchData){
            pageContent = <div>Loading...</div>
        }
        else {
            pageContent =         
                <React.Fragment>
                <h1>LaunchComponent {launchData.launchID}</h1>
                <h2>{launchData.name}</h2>
                <div>Provider: {launchData.lsp.name}</div>
                <div>NET: {launchData.net}</div>
                <img src={launchData.rocket.imageURL} style={{width: '100%'}} alt={launchData.name}></img>
                </React.Fragment>
        }

        return(
            <Page title="Launch">
                {pageContent}
            </Page>
        );

    }

}

const mapStateToProps = state => {
    return { 
        launches: state.launches 
    };
};

export default connect(
    mapStateToProps,
    { 
        retrieveLaunch: Actions.retrieveLaunch,
        retrieveLaunchStatuses: Actions.retrieveLaunchStatuses
    }
)(LaunchComponent);