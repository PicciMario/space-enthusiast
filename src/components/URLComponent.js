import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class urlComponent extends React.Component{

    static propTypes = {
        url: PropTypes.string.isRequired
    }

    render(){

        let {url} = this.props;

        if (url == null || url === '') return null;
        
        let urlText = url;
        let icon = <FontAwesomeIcon icon='link'/>;;

        try{
            let urlObject = new URL(url);
            if (/\.youtube\./.test(urlObject.hostname)) icon=<FontAwesomeIcon icon={['fab', 'youtube']}/>;
            if (/\.wikipedia\./.test(urlObject.hostname)) icon=<FontAwesomeIcon icon={['fab', 'wikipedia-w']}/>;
            if (/twitter\./.test(urlObject.hostname)) icon=<FontAwesomeIcon icon={['fab', 'twitter']}/>;
            if (/\.facebook\./.test(urlObject.hostname)) icon=<FontAwesomeIcon icon={['fab', 'facebook']}/>;
            if (/\.linkedin\./.test(urlObject.hostname)) icon=<FontAwesomeIcon icon={['fab', 'linkedin']}/>;
            urlText = urlObject.href;
        }
        catch (err){
            console.warn('Invalid url: ' + url);
        }

        return (
            <div key={url}>
                <a href={urlText} target="_blank" rel="noopener noreferrer">

                    <span 
                        style={{
                            whiteSpace: 'nowrap', 
                            display: 'block',
                            textOverflow: 'ellipsis', 
                            overflow: 'hidden', 
                            verticalAlign: 'middle', 
                            lineHeight: '1.5em'
                        }}
                    >
                    
                        <span 
                            style={{
                                float:'left', 
                                minWidth: 25
                            }}
                        >
                            {icon}
                        </span> 

                        {urlText}

                    </span>

                </a>
            </div>
        );

    }

}