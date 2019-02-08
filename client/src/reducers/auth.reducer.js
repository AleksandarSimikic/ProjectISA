// authReducer.js

import { SET_CURRENT_USER, AUTH_REGISTER } from '../actions/types';
import isEmpty from "lodash/isEmpty"


const initialState = {
    isAuthenticated: false,
    username: '',
    password: ''
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload), //true ili false u zavisnoti da li se user nalazi u payload-u.
                username: action.payload,
                password: action.payload
            }
        default: 
            return state;
    }
}