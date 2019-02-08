import { GET_USER, GET_USER_TICKETS, UNRESERVE_FLIGHT, DELETE_USER } from './types'
import axios from 'axios'

export const getUser = (id) => dispatch => {
  axios.get("/user/" + id)
    .then(res => dispatch({
      type: GET_USER,
      payload: res.data
    }))
    .catch(err => {
      console.log(err)
    })
}

export const unreserveTicket = (id) => dispatch => {
  axios.delete('/user/ticket/unreserve/' + id)
    .then(res => dispatch({
      type: UNRESERVE_FLIGHT,
      payload: res.data
    }))
    .catch(err => {
      console.log(err)
    })
}

export const deleteUser = (id) => dispatch => {
  axios.delete('/user/delete/' + id)
    .then(res => dispatch({
      type: DELETE_USER,
      payload: res.data
    }, localStorage.removeItem('token')))
    .catch(err => {
      console.log(err);
    })
}

export const getUserTickets = (id) => dispatch => {
  axios.get("/user/tickets/" + id)
    .then(res => dispatch({
      type: GET_USER_TICKETS,
      payload: res.data
    }))
    .catch(err => {
      console.log(err);
    })
}