const mongoose = require('mongoose')

const CarsSchema = mongoose.Schema({
  info: {
    id: Number,
    brand: {
      type: String,
			required: [true, 'You must select car!'],
			enum: ['Mercedes', 'Audi', 'VolksWagen', 'Ferrari'],
    },
    cost: {
      type: Number,
      required: [true, 'You must enter hourly cost of a entered car!']
    },
    model: {
      type: String,
      required: [true, 'You must assign model to a brand!']
    },
    dateOfRes: {
      type: Date,
      default: Date.now,
      required: [true, 'You must enter date of reservation!']
    },
    dateOfExp: {
      type: Date,
      default: Date.now+10000000,
      required: [true, 'You must enter date of expiry!']
    }
  }
})

const CarsData = mongoose.model('carsdata', CarsSchema);

module.exports = {
  CarsData,
  CarsSchema
}