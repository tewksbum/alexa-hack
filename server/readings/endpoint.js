import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import Readings from '/server/readings/collection';

if (Meteor.isServer) {

  // Global API configuration
  var Api = new Restivus({
    // useDefaultAuth: true,
    prettyJson: true
  });

  Api.addCollection(Readings, {
    routeOptions: {
      authRequired: false
    },
    endpoints: {
      post: {
        authRequired: false,
        action: function () {
          console.log("params: ", this.bodyParams);
          console.log("systolic: ", this.bodyParams.systolic);
          if (Readings.insert(this.bodyParams)) {
            if ((Number(this.bodyParams.systolic) < 121) && (Number(this.bodyParams.diastolic) < 81)) {
              console.log("Normal");
              return {status: 'success', data: {message: 'Normal'}};
            }
            if ((Number(this.bodyParams.systolic) > 179) || (Number(this.bodyParams.diastolic) > 109)) {
              console.log("Hypertensive Crisis - Go To Hospital");
              return {status: 'success', data: {message: 'Hypertensive Crisis - Go To Hospital'}};
            }
            if ((Number(this.bodyParams.systolic) > 159) || (Number(this.bodyParams.diastolic) > 99)) {
              console.log("High Blood Pressure Stage 2");
              return {status: 'success', data: {message: 'High Blood Pressure Stage 2'}};
            }
            if ((Number(this.bodyParams.systolic) > 139) || (Number(this.bodyParams.diastolic) > 89)) {
              console.log("High Blood Pressure Stage 1");
              return {status: 'success', data: {message: 'High Blood Pressure Stage 1'}};
            }
            console.log("Prehypertension");
            return {status: 'success', data: {message: 'Prehypertension'}};
          }
          return {
            statusCode: 404,
            body: {status: 'fail', message: 'Was not able to record readings for Moe'}
          };
        }
      },
    }
  });
}
