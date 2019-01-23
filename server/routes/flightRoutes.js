const flight_controller = require('../controller/flightsCont')
const AuthenticationController = require('../controller/userCont')
var express = require('express');
var passport = require('passport')
require('../config/passport')

var requireAuth = passport.authenticate('jwt', { session: false })
var requireAuthRedirect = passport.authenticate('jwt', { session: false })


var router = express.Router();

router.post('/create', requireAuth, AuthenticationController.roleAuthorization(['registered']), flight_controller.create)
router.get('/:id', flight_controller.details)
router.delete('/:id/delete',requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), flight_controller.delete)
router.put('/:id/update', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), flight_controller.update)
router.post('/:id/reserve', requireAuth, AuthenticationController.roleAuthorization(['registered']), flight_controller.reserve)
router.post('/:id/rate', requireAuth, AuthenticationController.roleAuthorization(['registered']), flight_controller.rate)

module.exports = router;
