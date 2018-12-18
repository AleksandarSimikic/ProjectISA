const Airport = require('../models/airport').AirportData

exports.create = (req, res) => {
  let airport = new Airport(
    {
      info: {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        location: req.body.location
      }
    }
  );
  airport.save((err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Airport created.' + airport}));
    }
  });
};

exports.details = (req, res) => {
  Airport.findById(req.params.id, (err, airport) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Airport details displayed.', airport }));
    } 
  });
};

exports.delete = (req, res) => {
  Airport.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Airport deleted.'}));
    }
    
  });
};

exports.update = (req, res) => {

  let updatedAirport = {
    info: {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      location: req.body.location
    }
  }

  Airport.findByIdAndUpdate(req.params.id, updatedAirport, {new: true}, (err, airport) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Airport updated.', airport }));
    }
  });
};