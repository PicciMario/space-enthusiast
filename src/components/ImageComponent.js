import React from 'react';
import PropTypes from 'prop-types';

export default class ImageComponent extends React.Component{

    static propTypes = {
        url: PropTypes.string.isRequired,
        sizes: PropTypes.array.isRequired,
        alt: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        alt: "",
        style: {}
    }

    render(){

        const {url, sizes, alt} = this.props;

        let bestSize = sizes.find((size) => size > 300);
        let newUrl = url.substring(0, url.lastIndexOf("_"));
        if (newUrl.endsWith("placeholder")) return null;
        let extension = url.substring(url.lastIndexOf("."), url.length);
        newUrl = newUrl + "_" + bestSize + extension;

        return(
            <img 
                src={newUrl} 
                style={this.props.style} 
                alt={alt}
            />
        );
    }

}