const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
	info: {
		
		avgRate: {
			type: Number,
			min:1,
			max:5
    },
    avgRateCar: {
			type: Number,
			min:1,
			max:5
		},
		income: {
      type: Number
    }
    //grafika rezervisanih vozila na denvnom, mjesecnom i godisnjem nivou
	}

})

const HotelData = mongoose.model('hoteldata', HotelSchema);

module.exports = {
	HotelData,
	HotelSchema
}

