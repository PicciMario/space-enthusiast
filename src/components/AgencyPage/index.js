
import React from 'react';
import { connect } from "react-redux";
import Page from '../BasePage/';
import * as Actions from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    urlComponent(rawUrl){
        
        let url = new URL(rawUrl);
        
        let icon = <FontAwesomeIcon icon='link'/>;;
        if (url.hostname === 'www.youtube.com') icon=<FontAwesomeIcon icon={['fab', 'youtube']}/>;
        if (url.hostname === 'en.wikipedia.org') icon=<FontAwesomeIcon icon={['fab', 'wikipedia-w']}/>;
        if (url.hostname === 'twitter.com') icon=<FontAwesomeIcon icon={['fab', 'twitter']}/>;

        return (
            <div key={url}>
                <a href={rawUrl} target="_blank" rel="noopener noreferrer">
                    <span style={{whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', verticalAlign: 'middle', lineHeight: '1.5em'}}>
                        {icon} {rawUrl}
                    </span>
                </a>
            </div>
        );

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
                <div>Is launch provider: {islsp}</div>
                <div>Type: {this.props.agencies.types[type]}</div>
                {this.urlComponent(wikiURL)}
                {
                    infoURLs.map((rawUrl) => this.urlComponent(rawUrl))
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
