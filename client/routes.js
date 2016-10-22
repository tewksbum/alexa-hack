import React from 'react';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import $ from 'jquery';

import Layout from '/client/layout';
import MyReadings from '/client/myreadings';

FlowRouter.route('/MyReadings', {
  name: 'myreadings',
  action() {
    mount(Layout, {
      detail: <MyReadings />,
    });
  },
});
