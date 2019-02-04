import { GET_AIRLINES, GET_DETAILS } from './types'
import axios from 'axios'

export const getAirlines = () => dispatch => {
  axios.get('/airline/airlines/all')
    .then(res => dispatch({
      type: GET_AIRLINES,
      payload: res.data
    })
  );
};

export const getDetails = (id) => dispatch => {
  axios.get('/airline/' + id)
    .then(res => dispatch({
      type: GET_DETAILS,
      payload: res.data.airline
    })
  ).catch(err => {
    console.log(err)
  });
};
