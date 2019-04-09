
import React from 'react';
import Page from '../BasePage/';
import { connect } from "react-redux";
import * as Actions from '../../redux/actions';
import URLComponent from '../URLComponent';
import ImageComponent from '../ImageComponent';
import history from '../../services/History';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

            let launchStatuses = this.props.launches.statuses;

            let {name, lsp, net, status, rocket, location, missions, vidURLs, infoURLs} = launchData;

            pageContent =         

                <React.Fragment>

                    <h2>{name}</h2>

                    <ImageComponent
                        url={rocket.imageURL}
                        sizes={rocket.imageSizes}
                        alt={name}
                        style={{
                            marginTop: 10,
                            marginBottom: 10,
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    />                    

                    <div onClick={() => history.push('/agency/' + lsp.id)}>
                        Provider: {lsp.name} <FontAwesomeIcon icon='link' style={{cursor: "pointer", fontSize: "small"}}/>
                    </div>
                    
                    <div>NET: {net}</div>

                    <div>Status: {launchStatuses[status]}</div>

                    <div>Rocket: {rocket.name} </div>

                    <div>Location: {location.name}</div>

                    <div>Pad: {location.pads.map((pad) => pad.name)}</div>

                    {
                        vidURLs != null &&
                        vidURLs.map((url) => <URLComponent key={url} url={url}/>)
                    }
                    {
                        infoURLs != null &&
                        infoURLs.map((url) => <URLComponent key={url} url={url}/>)
                    }                    

                    {
                        missions && missions.length > 0 &&
                            <React.Fragment>
                                <h3>Missions:</h3>
                                {
                                    missions.map((mission, count) => 
                                        <div key={'mission'+count}>
                                            <span style={{fontWeight:'bold'}}>{mission.name} </span> 
                                            {
                                                mission.typeName && <span>({mission.typeName}) </span>
                                            }
                                            {mission.description}
                                        </div>
                                    )
                                }
                            </React.Fragment>
                    }              

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