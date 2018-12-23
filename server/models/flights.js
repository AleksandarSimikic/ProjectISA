const mongoose = require('mongoose')
const validation = require('../utilities/validation')

const FlightSchema = mongoose.Schema({
	flight: {
		name: {
			type: String,
			required: [true, 'Name is requiered!'],
			validate: validation.nameValidator
		},
		rate: {
			type: Number,
			min:1,
			max:5
		},
		fromDest: {
			type: String,
			required: [true, 'You must enter destination where plane takes off!']
		},
		toDest: {
			type: String,
			required: [true, 'You must enter land destination!']
		},
		numOfMidd: Number,
		middleDest: String,
		startDate: {
			type: Date,
			default: Date.now,
			required: [true, 'You should enter date, otherwise it will be default(Today)']
		},
		endDate: {
			type: Date,
			default: Date.now + 60*60*24,
			required: [true, 'You should enter end date, otherwise it will be default(Today + 1 day) ']
		},
		cost: Number,
		flightDur: Number,
		mileage: Number,
		availableSeats: {
			type: Number,
			required: [true, 'You must enter flight available seats!'],
			min: 0,
			max: 250
		},
		reservedSeats: {
			type: Number,
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