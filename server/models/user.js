const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('../utilities/validation')
const bcrypt = require('bcrypt')
const mongooseStringQuery = require('mongoose-string-query')
// const jwt = require('jsonwebtoken')
// const passport = require('passport')
// var config = require('../config/auth');
const Ticket = require('./ticket').TicketSchema



const SALT_WORK_FACTOR = 10;
//  const MAX_LOGIN_ATTEMPTS = 4;
//  const LOCK_TIME = 20000;

const UserSchema =  new Schema({

		role: {
			type: String,
			enum: ['unregistered', 'registered', 'airlineadmin'],
			default: 'unregistered'
		},

		username: {
			type: String,
			required: [true, 'You must enter username!'],
			validate: validator.nameValidator,
			index: { unique: true}
		},
		name: {
			type: String,
			required: [true, 'You must enter name!'],
			validate: validator.nameValidator,
		},
		surname: {
			type: String,
			required: [true, 'You must enter surname!'],
			validate: validator.nameValidator,
		},
		dateOfBirth: {
			type: Date,
			default: Date.now,
		},
		sex: {
			type: String,
			enum: ["Male", 'Female'],
		},
		residency: String,
		email: {
			required: true,
			type: String,
			validate: validator.emailValidator,
			unique: true
		},
		
		password: {
			type: String,
			require: true
		},
		tickets: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Ticket'
		}]
		
	
}, { timestamps: true } );

// var reasons = UserSchema.statics.failedLogin = {
// 	NOT_FOUND: 0,
// 	PASSWORD_INCORRECT: 1,
// 	MAX_ATTEMPTS: 2,
// 	ACC_BLOCKED: 3
// }

// UserSchema.virtual('isLocked').get(function(){
// 	return !!(this.lockUntil && this.lockUntil > Date.now())
// })


UserSchema.pre('save', function(next) {
		var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next(); 
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);
 				bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);
						 user.password = hash;
            next();
        });
    });
});
UserSchema.methods.comparePassword = function(candidatePassword, next) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
			if (err) return next(err);
			next(null, isMatch);
	});
};

// UserSchema.methods.incLoginAttempts = function(next) {
// 	// if we have a previous lock that has expired, restart at 1
// 	if (this.lockUntil < Date.now()) {
// 			return this.updateOne({
// 					$set: { loginAttempts: 1 },
// 					$unset: { lockUntil: 1 }
// 			}, next);
// 	}
// 	// otherwise we're incrementing
// 	var updates = { $inc: { loginAttempts: 1 } };
// 	// lock the account if we've reached max attempts and it's not locked already
// 	if (this.loginAttempts >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
// 			updates.$set = { lockUntil: Date.now() + LOCK_TIME };
			 
// 	}
// 	return this.updateOne(updates, next);
// };

// // expose enum on the model, and provide an internal convenience reference 
// var reasons = UserSchema.statics.failedLogin = {
// 	NOT_FOUND: 0,
// 	PASSWORD_INCORRECT: 1,
// 	MAX_ATTEMPTS: 2
// };

// UserSchema.methods.validatePassword = function(password) {
//   const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   return this.hash === hash;
// };

// UserSchema.statics.getAuthenticated = function(username, password, next, token) {
// 	this.findOne({ username }, function(err, user) {
// 			if (err) return next(err);

// 			// make sure the user exists
// 			if (!user) {
// 					return next(null, null, reasons.NOT_FOUND);
// 			}

// 			// check if the account is currently locked
// 			if (user.isLocked) {
// 					// just increment login attempts if account is already locked
// 					return user.incLoginAttempts(function(err) {
// 						if(err) return next(err)
// 						return next(null,null, reasons.ACC_BLOCKED)
// 					})
					
// 			}

// 			// test for a matching password
// 			user.comparePassword(password, function(err, isMatch) {
// 					if (err) return next(err);

// 					// check if the password was a match
					
// 					if (isMatch) {
// 						if(user.isLocked)
// 							return next(null, null, ACC_BLOCKED)
// 						// reset attempts and lock info
// 						var token = jwt.sign(user.toJSON(), config.secret, 
// 							process.env.JWT_KEY, {expiresIn: 100000}
// 						);

// 						var updates = {
// 								$set: { loginAttempts: 0 },
// 								$unset: { lockUntil: 1 }
// 						};
// 						return user.update(updates, function(err) {
// 								if (err) return next(err);
// 								return next(null, user, null, token);
// 						});
// 				}

// 					// password is incorrect, so increment login attempts before responding
// 					user.incLoginAttempts(function(err) {
// 							if (err) return next(err);
// 							if 	(user.loginAttempts==MAX_LOGIN_ATTEMPTS && user.lockUntil) return next(null, null, reasons.MAX_ATTEMPTS);
// 							if	(user.loginAttempts>MAX_LOGIN_ATTEMPTS && user.lockUntil) return next(null, null, reasons.ACC_BLOCKED)
// 							return next(null, null, reasons.PASSWORD_INCORRECT);
// 					});
// 			});
// 	});
// };

const UserModel = mongoose.model('userdata', UserSchema);


module.exports = {
	UserModel,
	UserSchema
}

