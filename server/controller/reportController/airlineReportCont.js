const Airline = require('../../models/airlines').AirlineData
const Report = require('../../models/reports/airlineReport').ReportData
const Flight = require('../../models/flights')

exports.report = (req, res) => {

  const report = new Report({
    report: {
      name: '',
      avgRate: '',
      income: '',
    }
  })

  Airline.find({}, (err, airlines) => {
    if(err) return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    var airlineMap = {};

    airlines.forEach((airline) => {
      airlineMap[airline._id] = airline;
    })
  })
  console.log(airlineMap)
  Flight.find({}, (err, flights) => {
    if(err) return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    var flightMap = {};

    flights.forEach((flight) => {
      flightMap[flight._id] = flight;
    })
  })
  console.log(flightMap)
}