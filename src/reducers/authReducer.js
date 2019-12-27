import { FETCH_USER } from '../actions/actionTypes';

export default (state = null, action) => {
  //(null) means still making the request and figure out if the user is logged in
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
