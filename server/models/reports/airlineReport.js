const mongoose = require('mongoose')
const Airline = require('../flights')

const AirlineReportSchema = mongoose.Schema({
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

const AirlineData = mongoose.model("AirlineData", AirlineReportSchema);

AirlineReportSchema.pre('save', function(next) => {

})

module.exports = {
	AirlineReportData,
	AirlineReportSchema
}