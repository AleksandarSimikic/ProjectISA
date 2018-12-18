const mongoose = require('mongoose')
const validation = require('../utilities/validation')
//const AirlineData = require('./airlines')

const FlightSchema = mongoose.Schema({
	flight: {
		id: Number,
		name: {
			type: String,
			required: [true, 'Name is requiered!'],
			validate: validation.nameValidator

		},
		fromDest: String,
		toDest: String,
		// startDate: Date.now(),
		// endDate: Date.now()+100000,
		cost: Number,
		flightDur: Number,
		mileage: Number,
		availableSeats: {
			type: Number,
			required: [true, 'You must enter flight available seats!'],
			min: 0,
			max: 250
		}
	}
})

const FlightData = mongoose.model('flightdata', FlightSchema)

module.exports = {
	FlightData,
	FlightSchema
}