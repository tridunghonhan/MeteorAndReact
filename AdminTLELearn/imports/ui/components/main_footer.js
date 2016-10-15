import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

class MainFooter extends Component{
    render(){
        return(
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    Anything you want
                </div>
                <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
            </footer>
        );
    }
}
export default MainFooter;