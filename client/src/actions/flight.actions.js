import { GET_AIRLINE_FLIGHTS, CREATE_FLIGHT, BOOK_FLIGHT, DELETE_FLIGHT, UPDATE_FLIGHT, ALL_FLIGHTS } from './types'
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

export const getAllFlights = () => dispatch => {
  axios.get('/flight/flights/all')
    .then(res => dispatch({
      type: ALL_FLIGHTS,
      payload: res.data
    }, console.log(res.data)))
    .catch(err => {
      console.log(err);
    })
}

export const updateFlight = (id, flight) => dispatch => {
  axios.put('/flight/update/' + id, flight)
    .then(res => dispatch({
      type: UPDATE_FLIGHT,
      payload: res.data
    }))
    .catch(err => {
      console.log(err);
    })
}

export const deleteFlight = (id) => dispatch => {
  axios.delete('/flight/delete/' + id)
    .then(res => dispatch({
      type: DELETE_FLIGHT,
      payload: res.data
    }))
}

export const reserveFlight = (id) => dispatch => {
  axios.post('/flight/reserve/' + id)
    .then(res => dispatch({
      type: BOOK_FLIGHT,
      payload: res.data
    })
    )
    .catch(err => {
      console.log(err)
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