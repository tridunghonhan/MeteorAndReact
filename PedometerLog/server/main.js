import { Meteor } from 'meteor/meteor';
import {LogLine} from '../imports/collections/log_line';
import ConnectRoute from 'connect-route';
import { WebApp }  from 'meteor/webapp';

Meteor.startup(() => {
    Meteor.publish('log_line',function(){
      return LogLine.find({});
  });

});

HTTP.methods({
  '/log': {
    get: function(data) {
      console.log('data is ');
      console.log(data);
      

    },
    post: function(data) {
      console.log('data is ');
      console.log(data);
      return "success";
    },
    // put: function(data) {},
    // delete: function(data) {},
    // options: function() {
    //   // Example of a simple options function
    //   this.setStatusCode(200);
    //   this.addHeader('Accept', 'POST,PUT');
    //    // The options for this restpoint
    //    var options = {
    //      POST: {
    //        description: 'Create an issue',
    //        parameters: {
    //          title: {
    //            type: 'string',
    //            description: 'Issue title'
    //          }
    //        }
    //       }
    //    };
    //    // Print the options in pretty json
    //    return JSON.stringify(options, null, '\t');
    //  },
    //  stream: true // flag whether to allow stream handling in the request
  }
});