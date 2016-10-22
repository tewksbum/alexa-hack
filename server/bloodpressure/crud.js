import { Meteor } from 'meteor/meteor';
import BloodPressure from '/server/bloodpressure/collection';
import { check } from 'meteor/check';

import { FlowRouter } from 'meteor/kadira:flow-router';

Meteor.methods({
  'bloodpressure.create' (fields) {
    check(fields, Object);
    return BloodPressure.insert(fields);
  },
  'bloodpressure.read' (_id) {
    check(_id, String);
    return BloodPressure.findOne({ _id });
  },
  'bloodpressure.update' (_id, fields) {
    check(_id, String);
    check(fields, Object);
    BloodPressure.update({ _id }, { $set: fields });
  },
  'bloodpressure.delete' (_id) {
    check(_id, String);
    BloodPressure.remove({ _id });
  },

})
