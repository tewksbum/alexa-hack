import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import BloodPressure from '/server/bloodpressure/collection';

Meteor.publish('bloodpressure/All', () => {
  const query = CalculateQuery(Boards.queryHelpers, queryHelpers, params);
  return Boards.find();
});

Meteor.publish('bloodpressure/byId', function (_id) {
  check(_id, String);
  return BloodPressure.find({ _id });
});
