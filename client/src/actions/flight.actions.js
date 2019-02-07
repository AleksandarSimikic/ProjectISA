import { GET_AIRLINE_FLIGHTS, CREATE_FLIGHT } from './types'
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

export const createFlight = (id, flight) => dispatch => {
  axios.post('/flight/create/'+id, flight)
    .then(res => dispatch({
      type: CREATE_FLIGHT,
      payload: res.data
    })
  ).catch(err => {
    console.log(err);
  })
}