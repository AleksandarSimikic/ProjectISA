import { GET_AIRLINES, GET_DETAILS, UPDATE_AIRLINE } from '../actions/types'

const initialState = {
  airlines: [],
  airline: [],
  updAirline: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AIRLINES:
      return {
        ...state,
        airlines: action.payload
      }
    case GET_DETAILS:
      return {
        ...state,
        airline: action.payload
      }
    case UPDATE_AIRLINE:
      return {
        ...state,
        updAirline: action.payload
      }
    default: return state
  }
}
