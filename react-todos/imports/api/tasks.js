import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';


export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer){
    Meteor.publish('tasks', () => {
        return Tasks.find();
    });
}




Meteor.methods({
    'tasks.insert': (text) => {
        check(text, String);

        if(! Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }


        Tasks.insert({
            text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false
        });

    },//'tasks.insert'

    'tasks.remove': (taskId)=> {
        check(taskId, String);
        Tasks.remove(taskId);
    },//'tasks.remove'

    'tasks.setChecked':(taskId, checkedValue) => {
        check(taskId, String);
        check(checkedValue, Boolean);
        Tasks.update(taskId, {$set:{checked: checkedValue}});
    },//'tasks.setChecked'



});