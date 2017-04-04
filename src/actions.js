// @flow

import * as type from './actionTypes';

const action = type => () => ({ type: type });

export const increment = action(type.INCREMENT);
export const decrement = action(type.DECREMENT);
