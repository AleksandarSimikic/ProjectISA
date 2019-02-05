import { AUTH_REGISTER, AUTH_LOGIN } from "../actions/types"

const initialState = {
  username: '',
  password: ''
}

export default function(state = initialState, aciton) {
  switch(aciton.payload){
    case AUTH_REGISTER:
    return state
    case AUTH_LOGIN:
    return state
    default: return state
  }
}
