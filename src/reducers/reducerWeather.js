import FETCH_WEATHER from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; // same state.concat([ action.payload.data ]). es6 syntax sugar. we want new state.

  }

  return state;
}