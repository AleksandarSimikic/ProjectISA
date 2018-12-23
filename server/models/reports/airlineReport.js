const mongoose = require('mongoose')
const validator = require('../../utilities/validation')

const AirlineSchema = mongoose.Schema({
	info: {
		avgRate: {
			type: Number,
			min: 1,
			max: 5
		},
		avgRateFlight: {
      type: Number,
      min: 1,
      max: 5
    },
		income: {
			type: Number,
    },
    // + grafik prodatih karata na denvnom mjesecnom i godisnjem nivou
	}
})

const AirlineData = mongoose.model("AirlineData", AirlineSchema);

module.exports = {
	AirlineData,
	AirlineSchema
}