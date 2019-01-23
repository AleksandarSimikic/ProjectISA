const mongoose = require('mongoose')

const AirlineReportSchema = mongoose.Schema({
	report: [{
		name: String,
		avgRate: {
			type: Number,
			min: 1,
			max: 5
		},
		income: {
			type: Number,
    },
    // + grafik prodatih karata na denvnom mjesecnom i godisnjem nivou
	}]
})

const AirlineReportData = mongoose.model("AirlineReportData", AirlineReportSchema);

module.exports = {
	AirlineReportData,
	AirlineReportSchema
}