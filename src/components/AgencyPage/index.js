
import React from 'react';
import { connect } from "react-redux";
import Page from '../BasePage/';
import * as Actions from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import history from '../../services/History';
import ListComponent from '../ListComponent';

class AgencyPage extends React.Component{

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

            let links = [...infoURLs, wikiURL]

            pageContent =         
                <React.Fragment>
                <h2>{name} ({abbrev})</h2>
                <div>Country: {countryCode}</div>
                <div>Is launch provider: {islsp}</div>
                <div>Type: {this.props.agencies.types[type]}</div>
                {
                    links.length > 0 &&
                    <React.Fragment>
                    <hr/>
                    <h3>Links:</h3>
                    {links.map((rawUrl, index) => <React.Fragment key={'link'+index}>{this.urlComponent(rawUrl)}</React.Fragment>)}
                    </React.Fragment>
                    
                }
                {
                    rocketFamilies.length > 0 &&
                    <React.Fragment>
                    <hr/>
                    <h3>Rocket families:</h3>
                    {
                        rocketFamilies.map((family) => 
                            <ListComponent
                                key={family.id}
                                onClick={() => history.push('/rocketfamily/' + family.id)}
                                firstRow={family.name}
                                icon={<FontAwesomeIcon icon="arrow-circle-right"/>}
                            />
                        )
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
