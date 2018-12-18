const mongoose = require('mongoose')
const validator = require('../utilities/validation')

const RentSchema = mongoose.Schema({
	info: {
		id: Number,
		name: {
			type: String,
			required: [true, 'You must enter name!'],
			validate: validator.nameValidator
		},
		location: String,
		// dateOfExpire: Date,
		rate: {
			type: Number,
			min:1,
			max:5
		},
		email: {
			type: String,
			required: [true, 'You must enter e-mail!'],
			validate: validator.emailValidator
		}
	}
})

const RentModel = mongoose.model('RentData', RentSchema)

module.exports = {
	RentModel,
	RentSchema
}