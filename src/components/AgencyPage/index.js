
import React from 'react';
import { connect } from "react-redux";
import Page from '../BasePage/';
import * as Actions from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import history from '../../services/History';

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
        this.props.retrieveRocketFamilies();
    }

    urlComponent(rawUrl){

        if (rawUrl == null || rawUrl === '') return null;
        
        let urlText = rawUrl;
        let icon = <FontAwesomeIcon icon='link'/>;;

        try{
            let url = new URL(rawUrl);
            if (/\.youtube\./.test(url.hostname)) icon=<FontAwesomeIcon icon={['fab', 'youtube']}/>;
            if (/\.wikipedia\./.test(url.hostname)) icon=<FontAwesomeIcon icon={['fab', 'wikipedia-w']}/>;
            if (/twitter\./.test(url.hostname)) icon=<FontAwesomeIcon icon={['fab', 'twitter']}/>;
            if (/\.facebook\./.test(url.hostname)) icon=<FontAwesomeIcon icon={['fab', 'facebook']}/>;
            if (/\.linkedin\./.test(url.hostname)) icon=<FontAwesomeIcon icon={['fab', 'linkedin']}/>;
            urlText = url.href;
        }
        catch (err){
            console.warn('Invalid url: ' + rawUrl);
        }

        return (
            <div key={rawUrl}>
                <a href={rawUrl} target="_blank" rel="noopener noreferrer">

                    <span 
                        style={{
                            whiteSpace: 'nowrap', 
                            display: 'block',
                            textOverflow: 'ellipsis', 
                            overflow: 'hidden', 
                            verticalAlign: 'middle', 
                            lineHeight: '1.5em'
                        }}
                    >
                    
                        <span 
                            style={{
                                float:'left', 
                                minWidth: 25
                            }}
                        >
                            {icon}
                        </span> 

                        {urlText}

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

            let rocketFamilies = this.props.rockets.families
                .filter((family) => family.agencies && family.agencies.find((agency) => agency.id === Number(agencyID)))

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
                {
                    rocketFamilies.length > 0 &&
                    <React.Fragment>
                    <div>Rockets:</div>
                    {
                        rocketFamilies.map((family) => <div key={family.id} onClick={() => history.push('/rocketfamily/' + family.id)}>{family.name}</div>)
                    }
                    </React.Fragment>
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
        agencies: state.agencies,
        rockets: state.rockets
    };
};

export default connect(
    mapStateToProps,
    {
        retrieveAgency: Actions.retrieveAgency,
        retrieveAgencyTypes: Actions.retrieveAgencyTypes,
        retrieveRocketFamilies: Actions.retrieveRocketFamilies
    }
)(AgencyPage);
