const Car = require('../models/cars').CarsData

exports.create = (req, res) => {
  let car = new Car(
    {
      info: {
        id: req.body.id,
        brand: req.body.brand,
        model: req.body.model,
        dateOfRes: req.body.dateOfRes,
        dateOfExp: req.body.dateOfExp
      }
    });
  car.save((err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Car created.' + car}));
    }
  });
};

exports.details = (req, res) => {
  Car.findById(req.params.id, (err, car) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Car details displayed.', car }));
    } 
  });
};

exports.delete = (req, res) => {
  Car.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Car deleted.'}));
    }
    
  });
};

exports.update = (req, res) => {

  let updatedCar = {
    info: {
      id: req.body.id,
      brand: req.body.brand,
      model: req.body.model,
      dateOfRes: req.body.dateOfRes,
      dateOfExp: req.body.dateOfExp
    }
  }

  Car.findByIdAndUpdate(req.params.id, updatedCar, {new: true}, (err, car) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'Car updated.', car }));
    }
  });
};