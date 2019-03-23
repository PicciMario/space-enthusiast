import React from 'react';
import PropTypes from 'prop-types';
import URLComponent from '../URLComponent';

export default class RocketComponent extends React.Component{

    static propTypes = {
        rocketData: PropTypes.object.isRequired
    }

    render(){

        if (!this.props.rocketData) return null;
        let {name, wikiURL, infoURLs} = this.props.rocketData;
        let links = [wikiURL, ...infoURLs]

        return(
            <React.Fragment>
            <div>{name}</div>
            {
                links.map((link, count) => <URLComponent key={count} url={link}/>)
            }
            </React.Fragment>
        );
    }

}