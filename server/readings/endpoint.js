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
          console.log("userId: ", this.bodyParams.userId);
          if (Readings.insert(this.bodyParams)) {
            if (Number(this.bodyParams) > 10 ) {
              console.log("greater than 10");
            }
            return {status: 'success', data: {message: 'Readings saved'}};
          }
          return {
            statusCode: 404,
            body: {status: 'fail', message: 'Was not able to record readings for Moe'}
          };
        }
      },
    }
  });

  // Maps to: /api/articles/:id
  // Api.addRoute('articles/:id', {authRequired: true}, {
  //   get: function () {
  //     return Articles.findOne(this.urlParams.id);
  //   },
  //   delete: {
  //     roleRequired: ['author', 'admin'],
  //     action: function () {
  //       if (Articles.remove(this.urlParams.id)) {
  //         return {status: 'success', data: {message: 'Article removed'}};
  //       }
  //       return {
  //         statusCode: 404,
  //         body: {status: 'fail', message: 'Article not found'}
  //       };
  //     }
  //   }
  // });

}
