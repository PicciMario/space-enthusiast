
import React from 'react';
import Page from '../BasePage/';
import { connect } from "react-redux";
import * as Actions from '../../redux/actions';

class RocketFamilyPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        let {rocketFamilyID} = this.props.match.params;
        this.props.retrieveRocketFamilies();
        this.props.retrieveRocketsByFamily(rocketFamilyID)            
    }

    render(){

        let {rocketFamilyID} = this.props.match.params;
        let rocketFamilyData = this.props.rockets.families.find((family) => Number(family.id) === Number(rocketFamilyID));
        let rockets = this.props.rockets.rocketsByFamily[rocketFamilyID];

        let pageContent = null;

        if (!rocketFamilyData){
            pageContent = <div>Loading...</div>
        }
        else {

            let {name} = rocketFamilyData;

            pageContent =         
                <React.Fragment>
                <h2>{name}</h2>
                {
                    rockets &&
                    rockets.map((rocket) => <div>{rocket.name}</div>)
                }
                </React.Fragment>
        }

        return(
            <Page title="Rocket Family">
                {pageContent}
            </Page>
        );

    }

}

const mapStateToProps = state => {
    return { 
        rockets: state.rockets
    };
};

export default connect(
    mapStateToProps,
    { 
        retrieveRocketsByFamily: Actions.retrieveRocketsByFamily,
        retrieveRocketFamilies: Actions.retrieveRocketFamilies
    }
)(RocketFamilyPage);