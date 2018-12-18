// var mongoose = require('mongoose');


// mongoose.Promise = global.Promise; // uvodimo mongoose.Promise jer ne smijemo da koristimo default mpromise biblioteku u novijim verzijama. (deprecated lib)

// before((done) => {
// 	mongoose.connect('mongodb://localhost/appdb', { useNewUrlParser: true }, (error) => {
// 		if (error) {
// 			console.error('Error while connecting:\n%\n', error);
// 		}
//     console.log('MongoDB Connected.');
//     done()
// 	});
// });

// beforeEach((done) => {
// 	mongoose.connection.collections.hoteldatas.drop(() => {
// 		done();
// 	});
// });

// beforeEach((done) => {
// mongoose.connection.collections.flightdatas.drop(() => {
//   done();
// })
// });
