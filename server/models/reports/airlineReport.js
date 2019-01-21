const mongoose = require('mongoose')
const Flights = require('../flights')

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

const AirlineReportData = mongoose.model("AirlineReportData", AirlineReportSchema);

module.exports = {
	AirlineReportData,
	AirlineReportSchema
}