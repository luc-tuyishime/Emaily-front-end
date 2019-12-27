import axios from 'axios';
import { FETCH_USER } from './actionTypes';

// action creator
export const fetchUser = () => async dispatch => {
  // dispatch an action after the request has been completed
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
  console.log('this is the res', res.data);
};

// send the stripe token to our backend API
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token); // after making the post of token to the backend

  dispatch({ // update the user modal inside of Auth reducer
    type: FETCH_USER,
    payload: res.data
  });
};
