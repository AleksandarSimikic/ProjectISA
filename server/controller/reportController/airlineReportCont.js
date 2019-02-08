const Airline = require('../../models/airlines').AirlineData
const Report = require('../../models/reports/airlineReport').AirlineReportData
const Flight = require('../../models/flights').FlightData

exports.report = (req, res) => {

  const report = new Report({
    report: {
      name: '',
      avgRate: 1,
      income: 0,
    }
  })
  Airline.findById(req.params.id).then(airline => {
    var flightsList = airline.info.flights;
    report.report.avgRate = airline.info.avgRate;
    report.report.name = "Report for airline: " + airline.info.name
    console.log(report.report.name)
    report.report.income = 0;
    //console.log(flightsList)
    Flight.find({ '_id': { $in: flightsList } }).then(flights => {
      //console.log(flights)
      var flightMap = {};
      flights.forEach((flight) => {
        report.report.income += flight.flight.avgCost
        flightMap[flight._id] = flight;
      })
      console.log(report.report.income)
      console.log(report.report)
      report.save();
      return res.status(200).json(({success: true, msg: 'Report: ' + report}, report))
    })
  }).catch(err => {
    return res.status(400).json({success: false, msg: "Ne radi!"})
  })

  // Airline.find({}, (err, airlines) => {
  //   if(err) return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
  //   var airlineMap = {};

  //   airlines.forEach((airline) => {
  //     airlineMap[airline._id] = airline;

  //   })
  
  // console.log(airlineMap)
  // Flight.find({}, (err, flights) => {
  //   if(err) return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
  //   var flightMap = {};
  //   flights.forEach((flight) => {
  //     flightMap[flight._id] = flight;
  //   })
  //   console.log(flightMap)
    
//   })
  
// })
}