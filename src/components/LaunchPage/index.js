
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
        this.props.retrieveLaunchEvents(launchID);
    }

    render(){

        let {launchID} = this.props.match.params;
        let launchData = this.props.launches.details[launchID];

        let pageContent = null;
        if (!launchData){
            pageContent = <div>Loading...</div>
        }
        else {
            let launchStatuses = this.props.launches.statuses;
            let {name, lsp, net, status, rocket, location, missions} = launchData;
            let events = this.props.launches.events[launchID];

            pageContent =         
                <React.Fragment>
                <h2>{name}</h2>
                <div>Provider: {lsp.name}</div>
                <div>NET: {net}</div>
                <div>Status: {launchStatuses[status]}</div>

                <div>Rocket: {rocket.name}</div>

                <div>Location: {location.name}</div>

                <div>Pad: {location.pads.map((pad) => pad.name)}</div>

                {
                    missions && missions.map((mission, count) => 
                        <div key={'mission'+count}><span style={{fontWeight:'bold'}}>{mission.name}</span> {mission.description}</div>
                    )
                }

                {
                    events && events.map((event, count) => 
                        <div key={'event'+count}><span style={{fontWeight:'bold'}}>{event.relativeTime}</span> {event.description}</div>
                    )
                }                

                <img src={rocket.imageURL} style={{width: '100%'}} alt={name}></img>
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
        retrieveLaunchStatuses: Actions.retrieveLaunchStatuses,
        retrieveLaunchEvents: Actions.retrieveLaunchEvents
    }
)(LaunchComponent);