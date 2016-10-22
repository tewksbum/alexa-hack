import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const BloodPressure = new Mongo.Collection('bloodpressure');

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
  'reading.$.timestamp': {
    type: String,
    optional: true,
  },
  userId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
  },
});

BloodPressure.attachSchema(Schema);

export default BloodPressure;
