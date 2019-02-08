const flight_controller = require('../controller/flightsCont')
const AuthenticationController = require('../controller/userCont')
var express = require('express');
var passport = require('passport')
require('../config/passport')

var requireAuth = passport.authenticate('jwt', { session: false })
var requireAuthRedirect = passport.authenticate('jwt', { session: false })


var router = express.Router();

router.post('/create/:id', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), flight_controller.create)
router.get('/:id', flight_controller.details)
router.delete('/delete/:id',requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), flight_controller.delete)
router.put('/update/:id', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), flight_controller.update)
router.post('/reserve/:id', requireAuth, AuthenticationController.roleAuthorization(['registered']), flight_controller.reserve)
router.post('/rate/:id', requireAuth, AuthenticationController.roleAuthorization(['registered']), flight_controller.rate)
router.get('/flights/all', flight_controller.allflights)

module.exports = router;
