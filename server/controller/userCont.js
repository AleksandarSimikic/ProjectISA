var jwt = require('jsonwebtoken');  
var User = require('../models/user')
var authConfig = require('../config/auth');
var Ticket = require('../models/ticket')
var Flight = require('../models/flights').FlightData
const mongooseStringQuery = require('mongoose-string-query')
const mongoose = require('mongoose')

function generateToken(user){
  return jwt.sign(user, authConfig.secret, {
      expiresIn: 10000
  });
}

function setUserInfo(request){
  return {
      _id: request._id,
      username: request.username,
      role: request.role,
      surname: request.surname,
      email: request.email,
      name: request.name,
      residency: request.residency,
      sex: request.sex,
      dateOfBirth: request.dateOfBirth,
      password: request.password,
  };
}

exports.register = function(req, res, next){

  var username = req.body.username;
  var password = req.body.password;
  var surname = req.body.surname;
  var sex = req.body.sex;
  var dateOfBirth = req.body.dateOfBirth;
  var email = req.body.email;
  var residency = req.body.residency;
  var name = req.body.name;
  var role = req.body.role;
  

  if(!username){
      return res.status(422).send({error: 'You must enter username'});
  }

  if(!password){
      return res.status(422).send({error: 'You must enter a password'});
  }

  User.UserModel.findOne({username: username}, function(err, existingUser){

      if(err){
          return next(err);
      }

      if(existingUser){
          return res.status(422).send({error: 'That username is already in use'});
      }

      var user = new User.UserModel({
          username: username,
          password: password,
          surname: surname,
          email: email,
          name: name,
          residency: residency,
          sex: sex,
          dateOfBirth: dateOfBirth,
          role: 'registered',
      });

      user.save(function(err, user){

          if(err){
              return next(err);
          }
          var userInfo = setUserInfo(user);

          res.status(201).json({
              token: 'JWT ' + generateToken(userInfo),
              user: userInfo,
              
          })

      });

  });

}

exports.allusers = (req, res) => {
  User.UserModel.find().select('-password').then((users) => {
    return res.status(200).json(({ success: true, msg: 'users displayed!'}, users))
  }).catch(err => {
    return res.status(200).json(({ success: false, msg: 'Error: ' + err }))
  })
}

exports.details = (req, res) => {
  User.UserModel.findById(req.params.id, (err, user) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'user details displayed.', user }));
    } 
  });
};

exports.tickets = (req, res) => { //all tickets user has reserved
  User.UserModel.findById(req.params.id, (err, user) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    }
    var tickets = user.tickets
    console.log(tickets)
      Ticket.TicketData.find({_id: {$in: tickets}}, (err, ticket) => {
        if(err) {
          return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
        } else {
          return res.status(200).json(({success: false, msg: 'Your tickets: '}, ticket))
        }
      })
  })
}

// exports.searchUser = (req, res) => {
//   var searchedUser = {
//     name: req.query.name,
//     surname: req.query.surname
//   }
//   console.log(searchedUser);
// }

exports.unreserve = (req, res) => { // cancel ticket

     Ticket.TicketData.findByIdAndDelete(req.params.id).then((ticket) => {
      var id = ticket.flightId;
     // console.log(id);      
      Flight.findByIdAndUpdate(id, { $inc: { 'flight.availableSeats': 1, 'flight.reservedSeats': -1 }, $pull: { tickets: ticket._id } }, {new: true}, (err, flight) => {
        if(err){
          return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
        }
        User.UserModel.findOneAndUpdate({tickets: ticket._id}, { $pull: { tickets: ticket._id } }, {new: true}, (err, user) =>  {
         // console.log(user);
          if(err){
             return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
           }
           return res.status(200).json(({ success: true, msg: 'Ticket deleted! ' + ticket + ' Flight updated: ' + flight}, ticket, flight, user))
        })
      })
    }).catch((err) => {
      return res.status(400).json(({success: false, msg: 'Something went wrong: ' + err}))
    })
}

exports.delete = (req, res) => {
  User.UserModel.findByIdAndDelete(req.params.id).then((user) => {
    var tickets = user.tickets;
    Ticket.TicketData.find({_id: { $in: tickets } }).deleteMany().exec();

    Flight.updateMany({ tickets: { $in: tickets } }, { $pull: { tickets: { $in: tickets } } }, {multi: true}, (err) => {
        return res.status(200).json(({ success: true, msg: 'User deleted!' + user}))
    })
  })
  .catch((err) => {
    return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
  })
};


exports.logout = (req, res) => {
  
  User.UserModel.findById(req.params.id, checkAuth, (err, user) => {
    // if(err) {
    //   return status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    // }
    if(!user){
      return res.status(400).json(({ success: false, msg: 'You are not logged in!' + err}))
    } 
    else {
      return res.status(200).json(({ success: true, msg: 'Successfully logged out user: ' + user.username}))
    }
  })
}



// exports.login = (req,res) => {

//   // attempt to authenticate user
//   User.UserModel.getAuthenticated(req.body.username, req.body.password, function(err, user, reason, token) {
//       if (err) throw err;

//       // login was successful if we have a user
//       if (user) {
//           // handle login success
//           /*if(){
//             return res.status(400).json(({ success: false, msg: 'Login failed: (' + err + ')' }));

//           }*/
//           console.log('login success');
          
//           return res.status(200).json(({ success: true, msg: 'Login successful.', user, token: 'JWT: ' + token}));
//       }

      
//       // otherwise we can determine why we failed
//       var reasons = User.UserModel.failedLogin;
      
//       switch (reason) {
//           case reasons.NOT_FOUND:
//               console.log("NOT FOUND")
//               return res.status(400).json(({ success: false, msg: 'User is not found: (' + err + ')'}))

//           case reasons.PASSWORD_INCORRECT:
//               console.log("INCORRECT PASSWORD")
//               return res.status(400).json(({ success: false, msg: 'Incorrect password: (' + err + ')'}))
//               // note: these cases are usually treated the same - don't tell
//               // the user *why* the login failed, only that it did
              
//           case reasons.MAX_ATTEMPTS:
//               console.log("OVERLOADED")
//               return res.status(400).json(({ success: false, msg: 'Max. attempts overloaded: (' + err + ')'}))
          
//           case reasons.ACC_BLOCKED:
//              console.log("ACC BLOCKED TEMPORARLY FOR SAFETY. YOU ENTERED PASSWORD INCORECTLY MULTIPLE TIMES. CHECK YOUR EMAIL FOR UNBLOCKING.")
//              return res.status(400).json(({ success: false , msg: 'Acc blocked for security reasons. Visit you email inbox! Error:' + err}))
//       }
//   });


// }
exports.login = function(req, res, next){

  var userInfo = setUserInfo(req.user);
  
  res.status(200).json({
      token: 'JWT ' + generateToken(userInfo),
      user: userInfo
  });

}

exports.roleAuthorization = function(roles){

  return function(req, res, next){

      var user = req.user;

      User.UserModel.findById(user._id, function(err, foundUser){

          if(err){
              res.status(422).json({error: 'No user found.'});
              return next(err);
          }

          if(roles.indexOf(foundUser.role) > -1){
              return next();
          }

          res.status(401).json({error: 'You are not authorized to view this content'});
          return next('Unauthorized');

      });

  }

}

exports.update = (req, res) => {

  var updatedUser = 
        {
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            dateOfBirth: req.body.dateOfBirth,
            sex: req.body.sex,
            residency: req.body.residency,
            email: req.body.email,
            password: req.body.password,
            role: 'registered'
        };

  User.UserModel.findByIdAndUpdate(req.params.id, updatedUser, {new: true}, (err, user) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'user updated.', user }));
    }
  });
};