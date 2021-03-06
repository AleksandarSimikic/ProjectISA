const mongoose = require('mongoose')
const validator = require('../utilities/validation')

const AirlineSchema = mongoose.Schema({
	info:{
		name: {
			type: String,
			required: [true, 'Name is required!'],
			validate: validator.nameValidator
		},
		infoAboutDest: {
			type: String,
			required: [true, 'Information about airline destinations is requiered!']
		},
		rate: {
			type: Number,
		},
		avgRate: {
			type: Number,
			default: 0
		},
		count: {
			type: Number,
			default: 1
		},
		rateCount: {
			type: Number,
			default: 0
		},
		location: String,
		promoDesc: {
			type: String,
			required: [true, 'Description is required!'],
			validate: validator.descValidator
		},
		email: {
			type: String,
			validate: validator.emailValidator
		},
		lugageInfo:{
			type: String,
			required: [true, 'Lugage info is required!']
		},
		flights: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'flightdata'
		}],
		fastResDiscount: {
			type: String,
			required: false
		},
	}
})

const AirlineData = mongoose.model("AirlineData", AirlineSchema);

module.exports = {
	AirlineData,
	AirlineSchema
}