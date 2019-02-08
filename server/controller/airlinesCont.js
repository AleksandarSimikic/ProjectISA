const Airline = require('../models/airlines').AirlineData
const Flight = require('../models/flights')
const Ticket = require('../models/ticket')
const User = require('../models/user')

exports.allairlines = (req, res) => {
  Airline.find().then((airlines) => {
    return res.status(200).json(({ success: true, msg: 'List of all airlines: ' + airlines }, airlines))
  }).catch((err) => {
    return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err }))
  })
}


exports.create = (req, res) => {
  let airline = new Airline(
    {
      info:{
        name: req.body.name,
        rate: req.body.rate,
        location: req.body.location,
        email: req.body.email,
        promoDesc: req.body.promoDesc,
        infoAboutDest: req.body.infoAboutDest,
        lugageInfo: req.body.lugageInfo,
        fastResDiscount: req.body.fastResDiscount,
      }
    }
  );
  
  airline.save((err) => {
    if(err) {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline created.` + airline}));
    }
  });
};

exports.details = (req, res) => {
  Airline.findById(req.params.id).then(airline => {
    var flightsList = airline.info.flights;
    Flight.FlightData.find({ 'flight._id': { $in: flightsList } }, (err, flights) => { //nepotrebno. eksperimentisanje
      console.log(flights)
      return res.status(200).json(({ success: true, msg: `Airline details displayed.`, airline }));
    })
  }).catch(err => {
    return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
  })
};

exports.flights = (req, res) => {
  Airline.findById(req.params.id).then(airline => {
    var flightsList = airline.info.flights;
    Flight.FlightData.find({'flight._id': { $in: flightsList } }, (err, flights) => {
      console.log(flights);
      return res.status(200).json(({ success: true, msg: 'All flights of airline ' + airline.info.name + 'displayed!' }, flights))
    })
  }).catch(err => {
    return res.status(400).json(({ success: false, msg: "Something went wrong: " + err}))
  })
}

exports.rate = (req, res) => {
  var rate = parseInt(req.body.rate);
  
  
  Airline.findById(req.params.id, (err, airline) => {
    if(err) {
			return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    }
    console.log('avgRejting: ' + airline.info.rate);
    console.log('Rejting unesen preko req: ' + rate)
    console.log('Counter: ' + airline.info.count)
    airline.info.rateCount+=rate;
    avgRate = airline.info.rateCount / airline.info.count;
    airline.info.count += 1;
		airline.info.rate = avgRate;
		airline.info.avgRate = avgRate;

    //console.log(flight.flight.rate+=rate)
    airline.save((err) => {
      if(err) {
				return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))     
			}
      return res.status(200).json(({ success: true, msg: "Flight is rated. Thank you!" }, airline))
    })
  })
}

exports.delete = (req, res) => {
  Airline.findByIdAndDelete(req.params.id)
  .then((airline) => {
    var flightsList = airline.info.flights;
    Flight.FlightData.find({ 'flight._id': { $in: flightsList } }, (err, flights) => {
      console.log(flights)
      var ticketsList = new Array();
      flights.forEach((flight) => {
        (flight.tickets).forEach((ticket) => {
          //console.log(ticket)
          (ticketsList).push(ticket);
        })
      })
     // console.log(tickets);
      Ticket.TicketData.find({ _id: { $in : ticketsList } }, (err, tickets) => {
        console.log(tickets);
        User.UserModel.updateMany({ tickets: { $in : ticketsList } }, { $pull: { tickets: { $in: ticketsList } } }, { multi: true }).exec();
      }).deleteMany().exec();
    }).deleteMany().exec(() => {
      return res.status(200).json(({ success: true, msg: 'Airline deleted!'}, airline))
    })
  })
  .catch((err) => {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
  
  })
}

exports.update = (req, res) => {

  let updatedAirline = {
    info: {
      name: req.body.name,
     // rate: req.body.rate,
      location: req.body.location,
      email: req.body.email,
      promoDesc: req.body.promoDesc,
      infoAboutDest: req.body.infoAboutDest,
      lugageInfo: req.body.lugageInfo,
      fastResDiscount: req.body.fastResDiscount,
    }
  }

  Airline.findByIdAndUpdate(req.params.id, updatedAirline, {new: true}, (err, airline) => {
    if(err) {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline updated.`, airline }));
    }
  });
};
