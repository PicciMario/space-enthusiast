
import React from 'react';
import * as LaunchLibrary from '../../services/LaunchLibrary';
import Page from '../BasePage/';

class AgencyPage extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {
            agencyData: null,
            error: false,
            loading: true
        }

    }

    componentDidMount(){

        let {agencyID} = this.props.match.params;
        
        LaunchLibrary
            .agencyByID(agencyID)
            .then((data) => {
                if (data && data.agencies && data.agencies.length > 0){
                    this.setState({
                        agencyData: data.agencies[0],
                        error: false,
                        loading: false
                    });
                }
                else {
                    this.setState({
                        agencyData: null,
                        error: true,
                        loading: false
                    })
                }

            })
            .catch(e => {
                console.error(e);
                this.setState({
                    agencyData: null,
                    error: true,
                    loading: false
                })                
            })
    }

    render(){

        let {agencyData, loading, error} = this.state;

        let pageContent = null;

        if (loading || !agencyData){
            pageContent = <div>Loading...</div>
        }
        else if (error){
            pageContent = <div>Loading error.</div>
        }
        else {
            pageContent =         
                <React.Fragment>
                <h2>{agencyData.name}</h2>
                </React.Fragment>
        }

        return(
            <Page title="Agency">
                {pageContent}
            </Page>
        );

    }

}

export default AgencyPage;