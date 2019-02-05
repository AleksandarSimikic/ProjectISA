import { GET_AIRLINE_FLIGHTS } from './types'
import axios from 'axios'

export const getAirlineFlights = (id) => dispatch => {
  axios.get('/airline/' + id + "/flights")
    .then(res => dispatch({
      type: GET_AIRLINE_FLIGHTS,
      payload: res.data
    })
  ).catch(err => {
    console.log(err);
  })
}