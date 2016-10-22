import React from 'react';
import { Meteor } from 'meteor/meteor';
import Readings from '/both/readings/collection';

const MyReadings = React.createClass({
  render() {

    console.log(Readings.find().fetch());

    return (
      <section className="myreadings">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 col-md-12 col-lg-12">
              <h3>My Readings</h3>
              <p>
                Record daily and track your health!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-12 col-md-6 col-lg-6">
              <p>
                Click and drag the below Mavelet button, dropping it in the bookmark area of
                your browser.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  },

});

export default MyReadings;
