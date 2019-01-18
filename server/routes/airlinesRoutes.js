const airline_controller = require('../controller/airlinesCont')
var express = require('express');
var passport = require('passport')
var AuthenticationController = require('../controller/userCont')

require('../config/passport')
var requireAuth = passport.authenticate('jwt', {session: false});

var router = express.Router();


router.post('/create', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), airline_controller.create)
router.get('/:id', airline_controller.details)
router.delete('/:id/delete', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), airline_controller.delete)
router.put('/:id/update', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']),  airline_controller.update)

module.exports = router;
