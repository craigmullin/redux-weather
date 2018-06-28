import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
   switch(action.type) {
    case FETCH_WEATHER:
      // never manipulate state directly, i.e. ...
      // return state.push(action.payload.data);
      // rather, return new version of state...
      // return state.concat([action.payload.data]);
      // ES6 version...
      return [ action.payload.data, ...state ]; // city, city, city

   }
  return state;
}