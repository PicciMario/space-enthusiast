import React from 'react';
import HeaderBar from './HeaderBar';
import TabBar from './TabBar';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as Actions from '../../redux/actions';

class Page extends React.Component{

    static propTypes = {

        // If specified, enables saving the scroll position of the main div
        // into the redux keys reducer and restoring it on page mount.
        posKey: PropTypes.string
        
    }

    componentDidMount(){
        if (this.props.posKey){
            if (this.containerRef && this.props.keys[this.props.posKey] != null){
                setTimeout(() => this.containerRef.scrollTo(0, this.props.keys[this.props.posKey]));
            }
            this.scrollEventListened = this.containerRef.addEventListener('scroll', this.onScroll);
        }
    }   

    componentWillUnmount(){
        this.containerRef.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        let actualPos = this.containerRef.scrollTop;
        let oldPos = this.props.keys[this.props.posKey];
        if (oldPos == null || Math.abs(actualPos - oldPos) > 100){
            this.props.setKey(this.props.posKey, actualPos);
        }
    }

    render(){

        return(

            <React.Fragment>
                    
                <HeaderBar title={this.props.title}/>

                {
                    this.props.fixedHeader && 
                    <div 
                        style={{
                            marginLeft: 5,
                            marginRight: 5,
                            marginBottom: 5
                        }}
                    >
                        {this.props.fixedHeader}
                    </div>
                }

                <div 
                    className='page-container'
                    ref={(ref) => this.containerRef = ref}
                >
                    {this.props.children}
                </div>

                {
                    this.props.fixedFooter && 
                    <div 
                        style={{
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 5
                        }}
                    >
                        {this.props.fixedFooter}
                    </div>
                }

                <TabBar/>

            </React.Fragment>        

        );
    
    }

}

const mapStateToProps = state => {
    return { 
        keys: state.keys 
    };
};

export default connect(
    mapStateToProps,
    { 
        setKey: Actions.setKey
    }
)(Page);