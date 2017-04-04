// @flow

// We're using Redux for our state menagement
// every plugin can provide own reducer which will look for all UI actions

import * as type from './actionTypes';

const reducer = (state: number = 0, action: any) => {
  if (action.type === type.INCREMENT) {
    return state + 1;
  }

  if (action.type === type.DECREMENT) {
    return state - 1;
  }

  // Because you can listen for all actions you can reuse functionality from
  // other plugins in you logic, it's very easy, just look at public API of
  // dependent plugin and add it to your reducer
  // if(action.type === '@@epl-counter/INCREMENT') {
  //   return 42;
  // }

  return state;
};

export default reducer;
