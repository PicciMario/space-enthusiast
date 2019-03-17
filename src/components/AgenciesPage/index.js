import React, { Component } from 'react';
import { connect } from "react-redux";
import Agency from './Agency';
import Page from '../BasePage/';
import LoadingComponent from '../LoadingComponent';
import * as Actions from '../../redux/actions';

class AgenciesPage extends Component{

    constructor(props){

        super(props);

        this.state = {

            // Actual filter string
            filterString: ''

        }

    }

    componentDidMount(){
        // Tells redux to retrieve agencies list (if needed)
        this.props.retrieveAgencies();
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
        
    fixedFooter = () => {

        let {totalRecords, lastRecordReceived} = this.props.agencies;

        return(
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '0.7em',
                    color: 'gray'
                }}
            >   
                Total count: {totalRecords} (loaded: {lastRecordReceived})
            </div>        
        );
    }
    
    render() {

        let {list} = this.props.agencies;
        let {filterString} = this.state;

        let pageContent = null;

        if (list.length === 0){
            pageContent = <LoadingComponent/>
        }
        else {
            pageContent =         
                list
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

const mapStateToProps = state => {
    return { 
        agencies: state.agencies 
    };
};

export default connect(
    mapStateToProps,
    { 
        addAgencies: Actions.addAgencies,
        retrieveAgencies: Actions.retrieveAgencies
    }
)(AgenciesPage);