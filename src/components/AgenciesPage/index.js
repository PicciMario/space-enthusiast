import React, { Component } from 'react';
import * as LaunchLibrary from '../../services/LaunchLibrary';
import Agency from './Agency';
import Page from '../BasePage/';
import LoadingComponent from '../LoadingComponent';

class AgenciesPage extends Component{

    constructor(props){

        super(props);

        this.state = {

            // Full list
            agencies: [],

            // Last record number received from API
            lastRecordReceived: 0,

            // Total records as declared by API
            totalRecords: 0,

            // True if error while loading
            error: false,

            // True if loading first chunk
            loading: true,

            // Actual filter string
            filterString: ''
        }

    }

    componentDidMount(){
        this.loadAgencies();
    }

    loadAgencies = (offset) => {

        LaunchLibrary
            .agencies(offset)
            .then((data) => {
                if (data && data.agencies){
                    let newState = {
                        agencies: [...data.agencies, ...this.state.agencies],
                        error: false,
                        loading: false,
                        lastRecordReceived: Number(data.offset) + Number(data.count),
                        totalRecords: Number(data.total)
                    };
                    console.log(newState)
                    this.setState(
                        newState,
                        () => {
                            if (this.state.lastRecordReceived < this.state.totalRecords){
                                console.log('last record: ' + this.state.lastRecordReceived + ", totalRecords: " + this.state.totalRecords)
                                this.loadAgencies(this.state.lastRecordReceived);
                            }
                        }
                    );
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

    manageFilterChange = (e) => {
        this.setState({filterString: e.target.value});
    }

    filterHeader = () => 
        <div
            style={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >   
            Filter:
            <input 
                type="text" 
                value={this.state.filterString}
                onChange={this.manageFilterChange}
                style={{
                    flexGrow: 1,
                    marginLeft: 5,
                }}
            />
            <button
                onClick={() => this.setState({filterString: ''})}
            >
                &times;
            </button>
        </div>   
        
    fixedFooter = () => 
    <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: '0.7em',
            color: 'gray'
        }}
    >   
        Total count: {this.state.totalRecords} (loaded: {this.state.lastRecordReceived})
    </div>        
    
    render() {

        let {agencies, loading, error, filterString} = this.state;

        let pageContent = null;

        if (loading || !agencies){
            pageContent = <LoadingComponent/>
        }
        else if (error){
            pageContent = <div>Loading error.</div>
        }
        else {
            pageContent =         
                agencies
                .filter((agency) => filterString.length === 0 || agency.name.toUpperCase().startsWith(filterString.toUpperCase()))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((agency) => 
                    <div onClick={() => this.props.history.push('/launch/' + agency.id)} key={agency.id}>
                        <Agency agency={agency}/>
                    </div>
                )
        }        

        return(
            <Page title="Agencies" fixedHeader={this.filterHeader()} fixedFooter={this.fixedFooter()}>
                {pageContent}  
            </Page>
        );

    }
    
}

export default AgenciesPage;