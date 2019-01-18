// var mongoose = require('mongoose');
// var connStr = 'mongodb://localhost/testUserUser';
// var User = require('../models/user');
// mongoose.connect(connStr, { useNewUrlParser: true }, function(err) {
//     if (err) throw err;
//     console.log('Successfully connected to MongoDB');
// });


// var testUser = new  User.UserModel({
//         name: 'Aleksandar',
//         surname: 'Simikic',
//         username: 'Kara',
//         dateOfBirth: '12.12.2002',
//         sex: 'Male',
//         residency: 'Novi Sad',
//         email: 'aaama@gmail.com',
//         password: 'melkor1996'
    
// });

		
// testUser.save(function(err) {
//     // if (err) throw err;

//     // attempt to authenticate user
//     User.UserModel.getAuthenticated('sda', 'medlkor1002', function(err, user, reason) {
//         if (err) throw err;

//         // login was successful if we have a user
//         if (user) {
//             // handle login success
//             console.log('Login success');
//             return;
//         }

//         // otherwise we can determine why we failed
//         var reasons = User.UserModel.failedLogin;
//         switch (reason) {
//             case reasons.NOT_FOUND:
//                 console.log("NOT FOUND")
//                 break;
//             case reasons.PASSWORD_INCORRECT:
//                 console.log("INCORRECT PASSWORD")
//                 console.log(reasons)
//                 break;
//                 // note: these cases are usually treated the same - don't tell
//                 // the user *why* the login failed, only that it did
//                 break;
//             case reasons.MAX_ATTEMPTS:
//                 // send email or otherwise notify user that account is
//                 // temporarily locked
//                 break;
//         }
//     });
// });