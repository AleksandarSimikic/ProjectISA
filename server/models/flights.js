const mongoose = require('mongoose')
const validation = require('../utilities/validation')
const Ticket = require('./ticket')

const FlightSchema = mongoose.Schema({
	flight: {
		name: {
			type: String,
			required: [true, 'Name is requiered!'],
			validate: validation.nameValidator
		},
		rate: {
			type: Number,
			default: 0,
			
		},
		avgRate: {
			type: Number,
			default: 0
		},
		fromDest: {
			type: String,
			required: [true, 'You must enter destination where plane takes off!'],
		},
		toDest: {
			type: String,
			required: [true, 'You must enter land destination!'],
		},
		count: {
			type: Number,
			default: 1,
		},
		rateCount: {
			type: Number,
			default: 0
		},
		numOfMidd: Number,
		middleDest: [String],
		startDate: {
			type: Date,
			required: [true, 'You should enter date, otherwise it will be default(Today)'],
		},
		endDate: {
			type: Date,
			required: [true, 'You should enter end date, otherwise it will be default(Today + 1 day) '],
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
			default: 0,
			min: 0,
			max: 250
		},
	},
		ticket: [{ 
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Ticket'
		}]
	

})

const FlightData = mongoose.model('flightdata', FlightSchema)

module.exports = {
	FlightData,
	FlightSchema
}