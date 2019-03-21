import React from 'react';
import PropTypes from 'prop-types';

export default class ListComponent extends React.Component{

    static propTypes = {
        firstRow: PropTypes.node,
        secondRow: PropTypes.node,
        icon: PropTypes.node,
        onClick: PropTypes.func,
        iconTooltip: PropTypes.string
    };

    static defaultProps = {
        onClick: () => {}
    }

    render(){

        return(
            <div
                style={{
                    padding: 5,
                    border: '1px solid black',
                    borderRadius: 5,
                    marginBottom: 2,
                    cursor: 'pointer',
                    display: 'flex'
                }}
                onClick={this.props.onClick}
            >

                <div
                    style={{
                        flexGrow: 1
                    }}
                >
                
                    <div
                        style={{
                            fontSize: '1em',
                            wordBreak: 'break-word'
                        }}
                    >
                        {this.props.firstRow}
                    </div>

                    <div
                        style={{
                            fontSize: '0.8em',
                            wordBreak: 'break-word'
                        }}
                    >
                        {this.props.secondRow}
                    </div>

                </div>

                <div
                    title={this.props.iconTooltip}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 30,
                        fontSize: '1.3em'
                    }}
                >
                    {this.props.icon}
                </div>

            </div>
        );
    }

}