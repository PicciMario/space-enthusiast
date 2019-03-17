import React, { Component } from 'react';
import * as LaunchLibrary from '../../services/LaunchLibrary';
import Agency from './Agency';
import Page from '../BasePage/';
import LoadingComponent from '../LoadingComponent';

class AgenciesPage extends Component{

    constructor(props){

        super(props);

        this.state = {
            agencies: null,
            error: false,
            loading: true            
        }

    }

    componentDidMount(){

        LaunchLibrary
            .agencies()
            .then((data) => {
                if (data && data.agencies){
                    this.setState({
                        agencies: data.agencies,
                        error: false,
                        loading: false
                    });
                }
                else {
                    this.setState({
                        agencies: null,
                        error: true,
                        loading: false
                    })
                }

            })
            .catch(e => {
                console.error(e);
                this.setState({
                    agencies: null,
                    error: true,
                    loading: false
                })                
            })

    }

    render() {

        let {agencies, loading, error} = this.state;

        let pageContent = null;

        if (loading || !agencies){
            pageContent = <LoadingComponent/>
        }
        else if (error){
            pageContent = <div>Loading error.</div>
        }
        else {
            pageContent =         
                this.state.agencies.map((agency) => 
                    <div onClick={() => this.props.history.push('/launch/' + agency.id)} key={agency.id}>
                        <Agency agency={agency}/>
                    </div>
                )
        }        

        return(
            <Page title="Agencies">
                {pageContent}       
            </Page>
        );

    }
    
}

export default AgenciesPage;