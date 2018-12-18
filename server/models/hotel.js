const mongoose = require('mongoose');
const FlightData = require('./flights').FlightSchema
const validator = require('../utilities/validation')

const HotelSchema = mongoose.Schema({
	info: {
		id: Number,
		name: {
			type: String,
			required: [true, 'Name is required!'],
			validate: validator.nameValidator
		},
		rate: {
			type: Number,
			min:1,
			max:5
		},
		location: String,
		email: {
			type: String,
			required: [true, 'E-mail is required!'],
			unique: true,
			validate: validator.emailValidator
			
		},
		//dateOfEntry: Date,
		//dateOfExit: Date,
		cost: Number,
	}

})

const HotelData = mongoose.model('hoteldata', HotelSchema);

module.exports = {
	HotelData,
	HotelSchema
}

