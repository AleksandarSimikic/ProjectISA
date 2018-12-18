const Hotel = require('../models/hotel').HotelData

exports.create = (req, res) => {
  let hotel = new Hotel(
    {
      info: {
        id: req.body.id,
        name: req.body.name,
        rate: req.body.rate,
        location: req.body.location,
        //dateOfEntry: req.body.dateOfEntry,
        //dateOfExit: req.body.dateOfExit,
        cost: req.body.cost,
        //flight: [FlightData]
        email: req.body.email
      }
    }
  );
  hotel.save((err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Hotel created.' + hotel}));
    }
  });
};

exports.details = (req, res) => {
  Hotel.findById(req.params.id, (err, hotel) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Hotel details displayed.', hotel }));
    } 
  });
};

exports.delete = (req, res) => {
  Hotel.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Hotel deleted.'}));
    }
    
  });
};

exports.update = (req, res) => {

  let updatedHotel = {
    info: {
      id: req.body.id,
      name: req.body.name,
      rate: req.body.rate,
      location: req.body.location,
      cost: req.body.cost
    }
  }

  Hotel.findByIdAndUpdate(req.params.id, updatedHotel, {new: true}, (err, hotel) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Hotel updated.', hotel }));
    }
  });
};