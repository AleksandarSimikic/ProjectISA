import { GET_AIRLINES, GET_DETAILS } from '../actions/types'

const initialState = {
  airlines: [],
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
        airlines: action.payload
      }
    default: return state
  }
}
