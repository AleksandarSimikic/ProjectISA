// const Hotel = require('../models/hotel').HotelData

// exports.create = (req, res) => {
//   let hotel = new Hotel(
//     {
//       info: {
//         name: req.body.name,
//         rate: req.body.rate,
//         location: req.body.location,
//         dateOfEntry: req.body.dateOfEntry,
//         dateOfExit: req.body.dateOfExit,
//         roomsCofig: req.body.roomsCofig,
//         //flight: [FlightData]
//         email: req.body.email,
//         extras: req.body.extras
//       }
//     }
//   );
//   hotel.save((err) => {
//     if(err) {
//       return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
//     } else {
//       return res.status(200).json(({ success: true, msg: 'Hotel created.' + hotel}));
//     }
//   });
// };

// exports.details = (req, res) => {
//   Hotel.findById(req.params.id, (err, hotel) => {
//     if(err) {
//       return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
//     } else {
//       return res.status(200).json(({ success: true, msg: 'Hotel details displayed.', hotel }));
//     } 
//   });
// };

// exports.delete = (req, res) => {
//   Hotel.findByIdAndDelete(req.params.id, (err) => {
//     if(err) {
//       return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
//     } else {
//       return res.status(200).json(({ success: true, msg: 'Hotel deleted.'}));
//     }
    
//   });
// };

// exports.update = (req, res) => {

//   let updatedHotel = {
//     info: {
//       name: req.body.name,
//       rate: req.body.rate,
//       location: req.body.location,
//       dateOfEntry: req.body.dateOfEntry,
//       dateOfExit: req.body.dateOfExit,
//       roomsCofig: req.body.roomsCofig,
//       //flight: [FlightData]
//       email: req.body.email,
//       extras: req.body.extras
//     }
//   }

//   Hotel.findByIdAndUpdate(req.params.id, updatedHotel, {new: true}, (err, hotel) => {
//     if(err) {
//       return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
//     } else {
//       return res.status(200).json(({ success: true, msg: 'Hotel updated.', hotel }));
//     }
//   });
// };