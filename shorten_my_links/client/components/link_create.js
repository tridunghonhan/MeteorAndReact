import React, {Component} from 'react';
import Links from '../../imports/collections/links';

class LinkCreate extends Component {

    constructor(props){
        super(props);
        this.state = {error: ''};
    }


    handleSubmit(event){
        event.preventDefault();

        Meteor.call('links.insert',this.refs.userInput.value, (error)=>{
            if(error){
                this.setState({error: 'Enter a valid URL'});
            } else {
                this.setState({error: ''});
                this.refs.userInput.value ='';
            }
        });
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input ref="userInput" className="form-control"/>
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
    };
};


export default LinkCreate;