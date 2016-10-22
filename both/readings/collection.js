import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Readings = new Mongo.Collection('readings');

SimpleSchema.debug = true;

const Schema = new SimpleSchema({
  diastolic: {
    type: String,
    optional: true,
  },
  systolic: {
    type: String,
    optional: true,
  },
  pulse: {
    type: String,
    optional: true,
  },
  timestamp: {
    type: String,
    optional: true,
  },
  userId: {
    type: String,
    optional: true,
    // regEx: SimpleSchema.RegEx.Id,
  },
});

Readings.attachSchema(Schema);

export default Readings;
