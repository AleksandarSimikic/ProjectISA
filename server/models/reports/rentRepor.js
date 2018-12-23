const mongoose = require('mongoose');
const FlightData = require('../flights').FlightSchema
const validator = require('../../utilities/validation')

const HotelSchema = mongoose.Schema({
	info: {
		
		avgRate: {
			type: Number,
			min:1,
			max:5
    },
    avgRateRoom: {
			type: Number,
			min:1,
			max:5
		},
		income: {
      type: Number
    }
    //grafika posecenosti hotela na denvnom, mjesecnom i godisnjem nivou
	}

})

const HotelData = mongoose.model('hoteldata', HotelSchema);

module.exports = {
	HotelData,
	HotelSchema
}

