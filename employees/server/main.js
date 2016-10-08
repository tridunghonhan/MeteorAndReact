import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';
import _ from 'lodash';

Meteor.startup(() => {
  const numberOfRecords = Employees.find({}).count();

  console.log("numberOfRecords is: " + numberOfRecords.toString());
  if (!numberOfRecords) {
    _.times(1000, () => {
      const {name,email,phone} = helpers.createCard();
      Employees.insert({
        name,email,phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees',function(per_page){
    return Employees.find({}, { limit : per_page});
  });



});
