
import React from 'react';
import * as LaunchLibrary from '../LaunchLibrary';
import Page from '../Components/Page';

class LaunchComponent extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {
            launchData: null,
            error: false,
            loading: true
        }

    }

    componentDidMount(){
        
        LaunchLibrary
            .launchByID(this.props.match.params.launchID)
            .then((data) => {
                if (data && data.launches && data.launches.length > 0){
                    this.setState({
                        launchData: data.launches[0],
                        error: false,
                        loading: false
                    });
                }
                else {
                    this.setState({
                        launchData: null,
                        error: true,
                        loading: false
                    })
                }

            })
            .catch(e => {
                console.error(e);
                this.setState({
                    launchData: null,
                    error: true,
                    loading: false
                })                
            })
    }

    render(){

        let {launchData, loading, error} = this.state;

        let pageContent = null;

        if (loading || !launchData){
            pageContent = <div>Loading...</div>
        }
        else if (error){
            pageContent = <div>Loading error.</div>
        }
        else {
            pageContent =         
                <React.Fragment>
                <h1>LaunchComponent {launchData.launchID}</h1>
                <h2>{launchData.name}</h2>
                <div>Provider: {launchData.lsp.name}</div>
                <div>NET: {launchData.net}</div>
                <img src={launchData.rocket.imageURL} style={{width: '100%'}}></img>
                </React.Fragment>
        }

        return(
            <Page title="Launch">
                {pageContent}
            </Page>
        );

    }

}

export default LaunchComponent;