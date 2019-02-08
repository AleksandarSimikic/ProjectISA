import { GET_AIRLINES, GET_DETAILS, UPDATE_AIRLINE, DELETE_AIRLINE, RATE_AIRLINE, REPORT_AIRLINE } from './types'
import axios from 'axios'

export const getAirlines = () => dispatch => {
  axios.get('/airline/airlines/all')
    .then(res => dispatch({
      type: GET_AIRLINES,
      payload: res.data
    })
  ).catch(err => {
    console.log(err)
  })
};

export const updateAirline = (id, airline) => dispatch => {
  axios.put("/airline/update/" + id, airline)
    .then(res => dispatch({
      type: UPDATE_AIRLINE,
      payload: res.data
    }))
    .catch(err => {
      console.log(err);
    })
}

export const deleteAirline = (id) => dispatch => {
  axios.delete("/airline/delete/" + id)
    .then(res => dispatch({
      type: DELETE_AIRLINE,
      payload: res.data
    }))
    .catch(err => {
      console.log(err);
    })
}

export const rateAirline = (id, rate) => dispatch => {
  console.log(rate);
  axios.post("/airline/rate/" + id, {rate})
    .then(res => dispatch({
      type: RATE_AIRLINE,
      payload: res.data
    }))
    .catch(err => {
      console.log(err);
    })
}

export const reportAirline = (id) => dispatch => {
  axios.get("/airline/airlines/report/" + id)
    .then(res => dispatch({
      type: REPORT_AIRLINE,
      payload: res.data
    }))
    .catch(err => {
      console.log(err);
    })
}

export const getDetails = (id) => dispatch => {
  axios.get('/airline/' + id)
    .then(res => dispatch({
      type: GET_DETAILS,
      payload: res.data
    })
  ).catch(err => {
    console.log(err)
  });
};
