// @flow

import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

import { Container, Header, Button } from './styled';

const Component = ({ meaningOfLife, increment, decrement }) => {
  return (
    <Container className="col-xs-12">
      <Header>What is meaining of life: {meaningOfLife}</Header>
      <Button className="btn" positive onClick={increment}>+</Button>
      <Button className="btn" onClick={decrement}>-</Button>
    </Container>
  );
};

const mapStateToProps = state => {
  // every plugin has own key in redux store
  // you can access both your state as well as state of other plugin
  // but be careful, plugin you're looking for may not exist
  return {
    meaningOfLife: state['epl-plugin']
  };
};

export default connect(mapStateToProps, {
  // here you can specify redux action creators
  // for detailed info check redux documentation: http://redux.js.org/
  increment: actions.increment,
  decrement: actions.decrement
})(Component);
