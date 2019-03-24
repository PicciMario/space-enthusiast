import React, { Component } from 'react';
import Launch from './Launch';
import Page from '../BasePage/';
import { connect } from "react-redux";
import * as Actions from '../../redux/actions';

class HomeComponent extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.retrieveUpcomingLaunches();
    }

    render() {

        let {upcoming} = this.props.launches;

        return(
            <Page title="Space Enthusiast">
                <h1>Space Enthusiast</h1>
                <h3>Upcoming launches:</h3>
                {
                    upcoming.map((launch) => 
                        <div onClick={() => this.props.history.push('/launch/' + launch.id)} key={launch.id}>
                            <Launch launch={launch}/>
                        </div>
                    )
                }            
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
        retrieveUpcomingLaunches: Actions.retrieveUpcomingLaunches,
        retrieveLaunchSLN: Actions.retrieveLaunchSLN
    }
)(HomeComponent);