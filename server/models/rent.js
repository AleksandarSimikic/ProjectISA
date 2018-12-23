const mongoose = require('mongoose')
const validator = require('../utilities/validation')

const RentSchema = mongoose.Schema({
	info: {
		name: {
			type: String,
			required: [true, 'You must enter name!'],
			validate: validator.nameValidator
		},
		address: String,
		promoDesc: {
			type: String,
			required: [true, 'You must enter promo description!'],
			validate: validator.descValidator
		},
		//cars
		rate: {
			type: Number,
			min:1,
			max:5
		},
		email: {
			type: String,
			validate: validator.emailValidator
		},
		branchOffice: {
			type: String
		}
	}
})

const RentModel = mongoose.model('RentData', RentSchema)

module.exports = {
	RentModel,
	RentSchema
}