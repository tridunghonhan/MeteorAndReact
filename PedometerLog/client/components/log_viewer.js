import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {LogLine} from '../../imports/collections/log_line';


class LogViewer extends Component{
    renderLogLines(){
        console.log("LogViewer here");
        return this.props.log_lines.map(logLine => {
           const { createdDate, content} = logLine;
            return (
                <li>{createdDate} - <span>{content}</span></li>
            );
        });
    }
    render(){
        return(
            <ul>
                {this.renderLogLines()}
            </ul>
        );
    }
}

export default createContainer(()=>{
    Meteor.subscribe('log_line');
    return { log_lines: LogLine.find({}).fetch() };
},LogViewer);