const Flight = require('../models/flights').FlightData
const mongoose = require('mongoose')
const Ticket = require('../models/ticket').TicketData
const User = require('../models/user').UserModel
const jwt_decode = require('jwt-decode')

// function return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err})) {
//   return res.status(400).json(({ success: false, msg: 'Something went wrong' + err}));
// }

exports.create = (req, res) => {
  let flight = new Flight(
    {
      flight: {
        name: req.body.name,
        fromDest: req.body.fromDest,
        toDest: req.body.toDest,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        cost: req.body.cost,
        flightDur: req.body.flightDur,
        mileage: req.body.mileage,
        availableSeats: req.body.availableSeats,
        numOfMidd: req.body.numOfMidd,
        middleDest: req.body.middleDest,
      }
    }
  );
  flight.save((err) => {
    if(err) {
       return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Flight created.' + flight}));
    }
  });
};

exports.details = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    if(err) {
       return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Flight details displayed.', flight }));
    } 
  });
};

exports.delete = (req, res) => {
  Flight.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
       return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Flight deleted.'}));
    }
    
  });
};

exports.rate = (req, res) => {
  var rate = parseInt(req.body.rate);
  
  
  Flight.findById(req.params.id, (err, flight) => {
    if(err) {
			return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    }
    console.log('avgRejting: ' + flight.flight.rate);
    console.log('Rejting unesen preko req: ' + rate)
    console.log('Counter: ' + flight.flight.count)
    flight.flight.rateCount+=rate;
    avgRate = flight.flight.rateCount / flight.flight.count;
    flight.flight.count += 1;
		flight.flight.rate = avgRate;
		flight.flight.avgRate = avgRate;

    //console.log(flight.flight.rate+=rate)
    flight.save((err) => {
      if(err) {
				return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))     
			}
      return res.status(200).json(({ success: true, msg: "Flight is rated. Thank you!" }, flight))
    })
  })
}

// exports.unreserve = (req, res) => {

// }

exports.reserve = (req, res) => {

  Flight.findById(req.params.id, (err, flight) => {
    if(err) {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    }
    const ticket = new Ticket({
			_id: new mongoose.Types.ObjectId,
			flightName: flight.flight.name,
      fromDest: flight.flight.fromDest,
      toDest: flight.flight.toDest,
      dateOfRes: Date.now(),
      dateOfExp: Date.now() + 60*60*24*1000,
      flightStartDate: flight.flight.startDate,
      flightEndDate: flight.flight.endDate,
      middleDest: [flight.flight.middleDest]
    })
    ticket.save();
    var authHeader = req.headers.authorization
      var decoded = jwt_decode(authHeader);
    //console.log(ticket);
    if(flight.flight.availableSeats > 0){
      flight.flight.reservedSeats+=1;
      flight.flight.availableSeats-=1;
      
       User.findByIdAndUpdate(decoded._id, { $addToSet: { tickets: ticket } }, (err, user) => {
         if(err)  return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
       }).populate('tickets').exec((err, user)=>{
         if(err)  return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
				 console.log(user)
			 })

      flight.save((err) => {
        if(err)
          return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
        else 
          return res.status(200).json(({ success: true , msg: 'Seat reserved. Available seats: ' + flight.flight.availableSeats}))
      })
    } else {
      return res.status(400).json(({ success: false, msg: 'All seats reserverd!'}));
    }
  })
}
  

exports.update = (req, res) => {

  let updatedFlight = {
    flight: {
      name: req.body.name,
      fromDest: req.body.fromDest,
      toDest: req.body.toDest,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      cost: req.body.cost,
      flightDur: req.body.flightDur,
      mileage: req.body.mileage,
      availableSeats: req.body.availableSeats,
      rate: req.body.rate,
      numOfMidd: req.body.numOfMidd,
      middleDest: req.body.middleDest,
      reservedSeats: req.body.reservedSeats
    }
  }

  Flight.findByIdAndUpdate(req.params.id, updatedFlight, {new: true}, (err, flight) => {
    if(err) {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Flight updated.', flight }));
    }
  });
};