const Airline = require('../models/airlines').AirlineData

exports.create = (req, res) => {
  let airline = new Airline(
    {
      info: {
        id: req.body.id,
        name: req.body.name,
        rate: req.body.rate,
        location: req.body.location,
        email: req.body.email,
        promoDesc: req.body.promoDesc
      }
    }
  );
  airline.save((err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline created.` + airline}));
    }
  });
};

exports.details = (req, res) => {
  airline.findById(req.params.id, (err, airline) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline details displayed.`, airline }));
    } 
  });
};

exports.delete = (req, res) => {
  airline.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline deleted.`}));
    }
    
  });
};

exports.update = (req, res) => {

  let updatedAirline = {
    info: {
      id: req.body.id,
      name: req.body.name,
      rate: req.body.rate,
      location: req.body.location,
      email: req.body.email,
      promoDesc: req.body.promoDesc
    }
  }

  Airline.findByIdAndUpdate(req.params.id, updatedAirline, {new: true}, (err, airline) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline updated.`, airline }));
    }
  });
};
