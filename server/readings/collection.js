import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Readings = new Mongo.Collection('readings');

SimpleSchema.debug = true;

const Schema = new SimpleSchema({
  reading: {
    type: [Object],
    optional: true,
  },
  'reading.$.distolic': {
    type: String,
    optional: true,
  },
  'reading.$.systemic': {
    type: String,
    optional: true,
  },
  'reading.$.pulse': {
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
    regEx: SimpleSchema.RegEx.Id,
  },
});

Readings.attachSchema(Schema);

export default Readings;
