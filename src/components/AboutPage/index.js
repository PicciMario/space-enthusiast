import React, { Component } from 'react';
import Page from '../BasePage';

class AboutComponent extends Component{

    constructor(props){

        super(props);

        this.state = {
            launches: []
        }

    }

    render() {

        return(
            <Page title="About">
                <div style={{textAlign: 'center'}}>
                <h1>Space Enthusiast</h1>
                <h2>A minimalist interface to the Launch Library</h2>
                <h3>Proudly built by me</h3>            
                </div>
            </Page>
        );

    }
    
}

export default AboutComponent;