const Airline = require('../models/airlines').AirlineData

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
  Airline.findById(req.params.id, (err, airline) => {
    if(err) {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline details displayed.`, airline }));
    } 
  });
};

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
  Airline.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline deleted.`}));
    }
    
  });
};

exports.update = (req, res) => {

  let updatedAirline = {
    info: {
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

  Airline.findByIdAndUpdate(req.params.id, updatedAirline, {new: true}, (err, airline) => {
    if(err) {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: `Airline updated.`, airline }));
    }
  });
};
