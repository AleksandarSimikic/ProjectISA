import { GET_AIRLINES, GET_DETAILS, UPDATE_AIRLINE, DELETE_AIRLINE, RATE_AIRLINE, REPORT_AIRLINE } from '../actions/types'

const initialState = {
  airlines: [],
  airline: [],
  updAirline: [],
  rate: [],
  report: []
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
    case RATE_AIRLINE:
      return {
        ...state,
        rate: action.payload
      }
    case DELETE_AIRLINE:
      return {
        ...state
      }
    case REPORT_AIRLINE:
      return {
        ...state,
        report: action.payload
      }
    default: return state
  }
}
