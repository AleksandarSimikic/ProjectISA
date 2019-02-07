import { GET_AIRLINE_FLIGHTS, CREATE_FLIGHT } from '../actions/types'

const initialState = {
  flights: [],
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
    default: return state
  }
}