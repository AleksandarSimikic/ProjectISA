const Flight = require('../models/flights').FlightData

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
        rate: req.body.rate,
        numOfMidd: req.body.numOfMidd,
        middleDest: req.body.middleDest,
        reservedSeats: req.body.reservedSeats
      }
    }
  );
  flight.save((err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Flight created.' + flight}));
    }
  });
};

exports.details = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Flight details displayed.', flight }));
    } 
  });
};

exports.delete = (req, res) => {
  Flight.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Flight deleted.'}));
    }
    
  });
};

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
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'flight updated.', flight }));
    }
  });
};