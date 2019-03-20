import React, { Component } from 'react';
import { connect } from "react-redux";
import RocketFamily from './RocketFamily';
import Page from '../BasePage/';
import LoadingComponent from '../LoadingComponent';
import * as Actions from '../../redux/actions';

class RocketFamiliesPage extends Component{

    constructor(props){

        super(props);

        this.state = {

            // Actual filter string
            filterString: ''

        }

    }

    componentDidMount(){
        this.props.retrieveRocketFamilies();
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

        let {totalRecords, lastRecordReceived} = this.props.rockets;

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

        let {families} = this.props.rockets;
        let {filterString} = this.state;

        let pageContent = null;

        if (families.length === 0){
            pageContent = <LoadingComponent/>
        }
        else {
            pageContent =         
                families
                .filter((family) => 
                    filterString.length === 0 
                    || family.name.toUpperCase().includes(filterString.toUpperCase())
                )
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((family) => 
                    <div key={family.id}>
                        <RocketFamily family={family}/>
                    </div>
                )
        }        

        return(
            <Page title="Rocket families" fixedHeader={this.filterHeader()} fixedFooter={this.fixedFooter()}>
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
        addAgencies: Actions.addAgencies,
        retrieveAgencies: Actions.retrieveAgencies,

        retrieveRocketFamilies: Actions.retrieveRocketFamilies
    }
)(RocketFamiliesPage);