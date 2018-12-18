// const assert = require('assert')
// const HotelData = require('../models/hotel').HotelData
// const FlightData = require('../models/flights').FlightData
// const mocha = require('mocha')

// describe('Testing... Saving hotel record.', () =>  {
	
// 	// simple testing of mochas funcionality
// 	this.timeout(10000)
// 	var today = new Date();
// 	var flight = new FlightData({
// 		flight: {
// 			airline: 'JAT Airways',
// 			fromDest: 'Belgrade',
// 			toDest: 'Moscow',
// 			startDate: today.getDate(),
// 			endDate: today.getDate() + 100000,
// 			cost: 200,
// 			flightDur: 2,
// 			mileage: 1200,
// 		}
// 	});
	
// 	var hotel = new HotelData({
// 		info: {
// 			id: 10,
// 			name: 'Hotel BB2',
// 			rate: 5,
// 			location: 'Novi Sad',
// 			dateOfEntry: today.getDate(),
// 			dateOfExit: today.getDate() + 100000,
// 			cost: 400,
// 			flight: [flight, flight]
// 		}
// 	});
	
// 	it('Testing... Saving hotel record. ', (done) => {
		
// 		flight.save().then(() => {
// 			assert(flight.isNew === false)
// 			done();
// 		}).catch((err) => {
// 			console.log(err);
// 		});
// 		hotel.save().then(() => {
// 			assert(hotel.isNew === false)
// 			done();
// 		}).catch((err) => {
// 			console.log(err);
// 		});
// 		done()
// 	});
// });