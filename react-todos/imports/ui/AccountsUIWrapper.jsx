import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';
import ReactDOM from 'react-dom';

class AccountsUIWrapper extends Component{
    componentDidMount(){
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }

    componentUnmount(){
        Blaze.remove(this.view);
    }

    render(){
        return <span ref="container" />;
    }
}
export default AccountsUIWrapper;
