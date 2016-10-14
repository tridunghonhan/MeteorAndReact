import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'log_line.insert': function(aNewLogLine){
        Links.insert({content: aNewLogLine});
    }
});

export const LogLine = new Mongo.Collection('log_lines');