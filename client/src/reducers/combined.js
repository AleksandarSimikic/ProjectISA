import { combineReducers } from 'redux'
import airlineReducer from './airline.reducer'
import authReducer from './auth.reducer'
import userReducer from './user.reducer'
import flightReducer from './flight.reducer'
import ticketReducer from './ticket.reducer'

export default combineReducers({
  airline: airlineReducer,
  auth: authReducer,
  user: userReducer,
  flight: flightReducer,
  // ticketRed: ticketReducer
});