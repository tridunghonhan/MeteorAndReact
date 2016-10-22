import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Tasks} from '../api/tasks';

class Task extends Component
{  
    toggleChecked(event){
        console.log('Kenny');
        
        // Tasks.update(this.props.task._id, {$set: {checked: !this.props.task.checked}});
        Meteor.call('tasks.setChecked', this.props.task._id,!this.props.task.checked);
    }

    deleteTask(event){
        Meteor.call('tasks.remove', this.props.task._id);
    }

    render(){

        const taskClassName = this.props.task.checked? 'checked':'';
        return(
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteTask.bind(this)}>Delete</button>
                <input 
                    type="checkbox"
                    readOnly
                    checked={this.props.task.checked}
                    onClick={this.toggleChecked.bind(this)}
                    value=""
                />
                <span className="text">
                    <strong>{this.props.task.username}</strong>:{this.props.task.text}
                </span>          
            </li>  
        );
    }
}

Task.propTypes = {
        task: PropTypes.object.isRequired,
};

export default Task;