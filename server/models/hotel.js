// const mongoose = require('mongoose');
// const FlightData = require('./flights').FlightSchema
// const validator = require('../utilities/validation')

// const HotelSchema = mongoose.Schema({
// 	info: {
// 		name: {
// 			type: String,
// 			required: [true, 'Name is required!'],
// 			validate: validator.nameValidator
// 		},
// 		rate: {
// 			type: Number,
// 			min:1,
// 			max:5
// 		},
// 		roomsConfig: {
// 			type: String,
// 			required: [true, 'Pls, enter rooms configuration']
// 		},
// 		location: String,
// 		email: {
// 			type: String,
// 			unique: true,
// 			validate: validator.emailValidator
// 		},
// 		dateOfEntry: {
// 			type: Date,
// 			default: Date.now,
// 			required: [true, 'You must enter date of hotel entry!']
// 		},
// 		dateOfExit: {
// 			type: Date,
// 			default: Date.now + 60*60*24,
// 			required: [true, 'You must enter date of hotel exit!']
// 		},
// 	extras: {
// 		airportTransfer: {
// 			type: Boolean,
// 			default: false
// 		},
// 		parking: {
// 			type: Boolean,
// 			default: false
// 		},
// 			default: false
// 		},
// 		swimPool: {
// 			type: Boolean,
// 			default: false
// 		},
// 		restaurant: {
// 			type: Boolean,
// 			default: false
// 		},
// 		roomService: {
// 			type: Boolean,
// 			default: false
// 		},
// 		welness: {
// 			type: Boolean,
// 			default: false
// 		},
// 		spaCenter: {
// 			type: Boolean,
// 			default: false
// 		},
// 		wiFi: {
// 			type: Boolean,
// 			default: false
// 		},
// 		gym: {
// 			type: Boolean,
// 			default: false
// 		},
// 		golfArea: {
// 			type: Boolean,
// 			default: false
// 		},
// 		pets: {
// 			type: Boolean,
// 			default: false
// 		},
// 	}

// })

// const HotelData = mongoose.model('hoteldata', HotelSchema);

// module.exports = {
// 	HotelData,
// 	HotelSchema
// }

