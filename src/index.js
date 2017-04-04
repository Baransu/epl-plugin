// @flow

// every plugin is managin their socket connection on their own
// in future we want to provide set of epl-component providing socket handlers
// ready to use component for basic styling and another useful tools
// TODO create socket connection here and connect to epl-dashboard

// main plugin component
import Component from './Component';

// left side navigation icon, any font-awesome icon
// only icon name required
const icon = /*fa fa-*/ 'pied-piper';

// plugin name, used of redux state and router
const name = 'epl-plugin';

// reducer
import reducer from './reducer';

// we have to export everything
// plugins are then loaded from global scope and evaluated
// you have to preserve this nameing convertion
export { Component, icon, name, reducer };
