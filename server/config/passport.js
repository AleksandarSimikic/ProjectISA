var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/user').UserModel
var config = require('./auth');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

var localOptions = {
  usernameField: 'username'
};

var localLogin = new LocalStrategy(localOptions, function(username, password, done){ // pravimo strategiju za lokalno logovanje

  User.findOne({
      username: username
  }, function(err, user){

      if(err){
          return done(err);
      }

      if(!user){
          return done(null, false, {error: 'Login failed. Please try again.'});
      }

      user.comparePassword(password, function(err, isMatch){

          if(err){
              return done(err);
          }

          if(!isMatch){
              return done(null, false, {error: 'Login failed. Please try again.'});
          }

          return done(null, user);

      });

  });

});

var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'), // fromAuthHeader zastarjela. u novijoj verziji JWT-a se koristi fromAuthHeaderWithScheme za ekstraktovanje jwt iz headera zahtjeva
  secretOrKey: config.secret // tajna za generisanje tokena
};

var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){ // jwt strategija za logovanje

  User.findById(payload._id, function(err, user){

      if(err){
          return done(err, false);
      }

      if(user){
          done(null, user);
      } else {
          done(null, false);
      }

  });

});

passport.use(jwtLogin);
passport.use(localLogin);



// Setup work and export for the JWT passport strategy
// module.exports = function(passport) {
//   var opts = {};
//   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
//   opts.secretOrKey = config.secret;
//   passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.id}, function(err, user) {
//       if (err) {
//         return done(err, false);
//       }
//       if (user) {
//         done(null, user);
//       } else {
//         done(null, false);
//       }
//     });
//   }));
// };