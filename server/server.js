const express = require('express')
const logger = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// const hotelRouter = require('./routes/hotelRoutes')
const airlineRouter = require('./routes/airlinesRoutes')
const flightRouter = require('./routes/flightRoutes')
// const rentRouter = require('./routes/rentRoutes')
// const carsRouter = require('./routes/carsRouter')
const userRouter = require('./routes/userRoutes')
const User = require('./models/user').UserModel
const jwt = require('jsonwebtoken')
const passport = require('passport')

const router = express.Router();

mongoose.Promise = global.Promise; // uvodimo mongoose.Promise jer ne smijemo da koristimo default mpromise biblioteku u novijim verzijama. (deprecated lib)


	mongoose.connect('mongodb://localhost/testUserUser', { useNewUrlParser: true }, (error) => {
		if (error) {
			console.error('Error while connecting:\n%\n', error);
		}
		console.log('MongoDB Connected.');
	});


const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started at port: " + port))

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));


// app.use('/hotel', hotelRouter);
app.use('/airline', airlineRouter);
app.use('/flight', flightRouter);
// app.use('/rent', rentRouter);
// app.use('/rent/cars', carsRouter);
app.use('/user', userRouter)

// app.use('hotel/room', roomRouter)




