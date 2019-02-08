// authReducer.js

import { GET_USER, GET_USER_TICKETS, DELETE_USER } from '../actions/types';

const initialState = {
    user: [],
    tickets: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_USER_TICKETS:
            return {
                ...state,
                tickets: action.payload
            }
        case DELETE_USER:
            return {
                ...state
            }
        default: 
            return state;
    }
}