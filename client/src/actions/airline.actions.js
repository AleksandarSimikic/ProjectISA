import { GET_AIRLINES } from './types'
import axios from 'axios'

export const getAirlines = () => dispatch => {
  axios.get('/airline/airlines/all')
    .then(res => dispatch({
      type: GET_AIRLINES,
      payload: res.data
    })
  );
};
