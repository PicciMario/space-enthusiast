import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class HomeComponent extends Component{

    constructor(props){

        super(props);

        this.state = {
            launches: []
        }

    }

    componentDidMount(){
        fetch(
            'https://launchlibrary.net/1.4/launch?next=5'
        )        
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            console.log(data);
            this.setState({launches: data.launches});
        })
    }


    render() {
        return (
            <React.Fragment>
                
                <h1>Home Component</h1>
                {
                    this.state.launches.map((launch) => 
                        <div onClick={() => this.props.history.push('/launch/' + launch.id)}>
                            {launch.name}
                        </div>
                    )
                }
       

            </React.Fragment>
        );
    }
    
}

export default HomeComponent;