const Rent = require('../models/rent').RentModel

exports.create = (req, res) => {
  let rent = new Rent(
    {
      info: {
        id: req.body.id,
        name: req.body.name,
        location: req.body.location,
        //dateOfRes: req.body.dateOfRes,
        rate: req.body.rate
      }
    });
  rent.save((err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Rent created.' + rent}));
    }
  });
};

exports.details = (req, res) => {
  Rent.findById(req.params.id, (err, rent) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Rent details displayed.', rent }));
    } 
  });
};

exports.delete = (req, res) => {
  Rent.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Rent deleted.'}));
    }
    
  });
};

exports.update = (req, res) => {

  let updatedRent = {
    info: {
      id: req.body.id,
      name: req.body.name,
      //dateOfRes: req.body.dateOfRes,
      location: req.body.location,
      rate: req.body.rate
    }
  }

  Rent.findByIdAndUpdate(req.params.id, updatedRent, {new: true}, (err, rent) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Rent updated.', rent }));
    }
  });
};