import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Readings from '/server/readings/collection';

Meteor.publish('readings/All', () => {
  return Readings.find();
});

Meteor.publish('readings/byId', function (_id) {
  check(_id, String);
  return Readings.find({ _id });
});
