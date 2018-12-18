const User = require('../models/user')

exports.create = (req, res) => {
  let user = new User.UserModel(
    {
       
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        dateOfBirth: req.body.dateOfBirth,
        sex: req.body.sex,
        residency: req.body.residency,
        email: req.body.email,
        password: req.body.password
      
    });
  user.save((err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'user created.' + user}));
    }
  });
  
};

exports.details = (req, res) => {
  User.UserModel.findById(req.params.id, (err, user) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'user details displayed.', user }));
    } 
  });
};

exports.delete = (req, res) => {
  User.UserModel.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'user deleted.'}));
    }
    
  });
};

exports.login = (req,res) => {

  // attempt to authenticate user
  User.UserModel.getAuthenticated(req.body.username, req.body.password, function(err, user, reason, lock) {
      if (err) throw err;

      // login was successful if we have a user
      if (user) {
          // handle login success
          /*if(){
            return res.status(400).json(({ success: false, msg: 'Login failed: (' + err + ')' }));

          }*/
          console.log('login success');
          
          return res.status(200).json(({ success: true, msg: 'Login successful.', user }));
      }

    console.log(lock);
      
      // otherwise we can determine why we failed
      var reasons = User.UserModel.failedLogin;
      
      switch (reason) {
          case reasons.NOT_FOUND:
              console.log("NOT FOUND")
              return res.status(400).json(({ success: false, msg: 'User is not found: (' + err + ')'}))

          case reasons.PASSWORD_INCORRECT:
              console.log("INCORRECT PASSWORD")
              return res.status(400).json(({ success: false, msg: 'Incorrect password: (' + err + ')'}))
              // note: these cases are usually treated the same - don't tell
              // the user *why* the login failed, only that it did
              
          case reasons.MAX_ATTEMPTS:
              console.log("OVERLOADED")
              return res.status(400).json(({ success: false, msg: 'Max. attempts overloaded: (' + err + ')'}))
          
          case reasons.ACC_BLOCKED:
             console.log("ACC BLOCKED TEMPORARLY FOR SAFETY. YOU ENTERED PASSWORD INCORECTLY MULTIPLE TIMES. CHECK YOUR EMAIL FOR UNBLOCKING.")
             return res.status(400).json(({ success: false , msg: 'Acc blocked for security reasons. Visit you email inbox! Error:' + err}))
      }
  });


}

exports.update = (req, res) => {

  let updatedUser = {
      name: req.body.name,
      surname: req.body.surname,
      username: req.body.username,
      dateOfBirth: req.body.dateOfBirth,
      sex: req.body.sex,
      residency: req.body.residency,
      email: req.body.email,
      password: req.body.password
    
  }

  User.UserModel.findByIdAndUpdate(req.params.id, updatedUser, {new: true}, (err, user) => {
    if(err) {
      return res.status(400).json(({ success: false, msg: 'Something went wrong: ' + err}))
    } else {
      return res.status(200).json(({ success: true, msg: 'user updated.', user }));
    }
  });
};