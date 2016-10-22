import { Meteor } from 'meteor/meteor';
import Readings from '/server/readings/collection';
import { check } from 'meteor/check';

Meteor.methods({
  'readings.create' (fields) {
    check(fields, Object);
    return Readings.insert(fields);
  },
  'readings.read' (_id) {
    check(_id, String);
    return Readings.findOne({ _id });
  },
  'readings.update' (_id, fields) {
    check(_id, String);
    check(fields, Object);
    Readings.update({ _id }, { $set: fields });
  },
  'readings.delete' (_id) {
    check(_id, String);
    Readings.remove({ _id });
  },

})
