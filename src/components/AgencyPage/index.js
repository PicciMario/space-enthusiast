
import React from 'react';
import { connect } from "react-redux";
import Page from '../BasePage/';
import * as Actions from '../../redux/actions';

class AgencyPage extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {

        }

    }

    componentDidMount(){
        let {agencyID} = this.props.match.params;
        this.props.retrieveAgency(agencyID);
        this.props.retrieveAgencyTypes();
    }

    render(){

        let {agencyID} = this.props.match.params;
        let agencyData = this.props.agencies.details[agencyID];

        let pageContent = null;
        let footer = null;
        if (!agencyData){
            pageContent = <div>Loading...</div>
        }
        else {

            let {name, abbrev, countryCode, islsp, type, wikiURL, changed, infoURLs} = agencyData;

            pageContent =         
                <React.Fragment>
                <h2>{name}</h2>
                <div>Abbreviation: {abbrev}</div>
                <div>Country: {countryCode}</div>
                <div>Type: {type}</div>
                <div>Is launch provider: {islsp}</div>
                <div>Type: {this.props.agencies.types[type]}</div>
                <div><a href={wikiURL} target="_blank">Wikipedia entry</a></div>
                {
                    infoURLs.map((url, index) => 
                        <div key={'url'+index}><a href={url} target="_blank">{url}</a></div>
                    )
                }
                </React.Fragment>

            footer = <div>Last updated: {changed}</div>
        }

        return(
            <Page title="Agency" fixedFooter={footer}>
                {pageContent}
            </Page>
        );

    }

}

const mapStateToProps = state => {
    return { 
        agencies: state.agencies 
    };
};

export default connect(
    mapStateToProps,
    {
        retrieveAgency: Actions.retrieveAgency,
        retrieveAgencyTypes: Actions.retrieveAgencyTypes
    }
)(AgencyPage);
