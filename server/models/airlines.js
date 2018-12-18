const mongoose = require('mongoose')
const validator = require('../utilities/validation')

const AirlineSchema = mongoose.Schema({
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
		promoDesc: {
			type: String,
			required: [true, 'Description is required!'],
			validate: validator.descValidator
		},
		email: {
			type: String,
			require: [true, 'E-mail is not entered. Enter valid one (smth@smth.com)'],
			validate: validator.emailValidator
		}
	}
})

const AirlineData = mongoose.model("AirlineData", AirlineSchema);

module.exports = {
	AirlineData,
	AirlineSchema
}