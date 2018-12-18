const mongoose = require('mongoose')
const validator = require('../utilities/validation')

const AirportSchema = mongoose.Schema({
  info: {
    id: Number,
    name: {
      type: String,
      required: [true, 'You must enter name!'],
      validation: validator.nameValidator
    },
    email: {
			type: String,
			required: [true, 'E-mail is required!'],
			unique: true,
			validate: validator.emailValidator
    },
    location: String,
  }
})

const AirportData = mongoose.model('airportdata', AirportSchema)

module.exports = {
  AirportData,
  AirportSchema
}