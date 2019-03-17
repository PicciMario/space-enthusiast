import React, { Component } from 'react';
import * as LaunchLibrary from '../../services/LaunchLibrary';
import Agency from './Agency';
import Page from '../BasePage/';

class AgenciesPage extends Component{

    constructor(props){

        super(props);

        this.state = {
            agencies: []
        }

    }

    componentDidMount(){
        LaunchLibrary.agencies()
        .then((data) => {
            this.setState({agencies: data.agencies});
        })
    }

    render() {

        return(
            <Page title="Agencies">
                {
                    this.state.agencies.map((agency) => 
                        <div onClick={() => this.props.history.push('/launch/' + agency.id)} key={agency.id}>
                            <Agency agency={agency}/>
                        </div>
                    )
                }            
            </Page>
        );

    }
    
}

export default AgenciesPage;