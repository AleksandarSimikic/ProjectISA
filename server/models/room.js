const mongoose = require('mongoose')
const validator = require('../utilities/validation')

const RentSchema = mongoose.Schema({
	info: {
		roomType: {
			type: String,
      required: [true, 'Enter room type'],
      enum: ['Double Room', 'Triple Room', 'President Suite', 'Single Room', 'Family Suite']
		},
		rate: {
			type: Number,
			min:1,
			max:5
    },
    reserved: {
      type: Boolean,
      default: false,
    },
    roomCost: {
      type: Number,
      required: [true, 'You must enter room cost!']
    }
		
	}
})

const RentModel = mongoose.model('RentData', RentSchema)

module.exports = {
	RentModel,
	RentSchema
}