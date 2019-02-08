import { GET_AIRLINE_FLIGHTS, CREATE_FLIGHT, DELETE_FLIGHT, UPDATE_FLIGHT, ALL_FLIGHTS } from '../actions/types'

const initialState = {
  flights: [],
  updFlight: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_AIRLINE_FLIGHTS:
      return {
        ...state,
        flights: action.payload
      }
    case CREATE_FLIGHT:
      return {
        ...state,
        flights: action.payload
      }
    case DELETE_FLIGHT:
      return {
        ...state
      }
    case ALL_FLIGHTS: 
      return {
        ...state,
        flights: action.payload
      }
    case UPDATE_FLIGHT:
      return{
        ...state,
        updFligt: action.payload
      }
    default: return state
  }
}