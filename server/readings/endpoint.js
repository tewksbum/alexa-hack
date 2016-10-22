import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import Readings from '/server/readings/collection';

if (Meteor.isServer) {

  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  // Generates: GET, POST on /api/readings and GET, PUT, DELETE on
  // /api/readings/:id for the Readings collection
  Api.addCollection(Readings);

  // Generates: POST on /api/users and GET, DELETE /api/users/:id for
  // Meteor.users collection
  // Api.addCollection(Meteor.users, {
  //   excludedEndpoints: ['getAll', 'put'],
  //   routeOptions: {
  //     authRequired: false
  //   },
  //   endpoints: {
  //     post: {
  //       authRequired: false
  //     },
  //     delete: {
  //       roleRequired: 'admin'
  //     }
  //   }
  // });

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
