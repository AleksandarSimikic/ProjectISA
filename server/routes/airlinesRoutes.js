const airline_controller = require('../controller/airlinesCont')
var express = require('express');
var passport = require('passport')
var AuthenticationController = require('../controller/userCont')
var reportCont = require('../controller/reportController/airlineReportCont')

require('../config/passport')
var requireAuth = passport.authenticate('jwt', {session: false});

var router = express.Router();


router.post('/create', requireAuth, AuthenticationController.roleAuthorization(['registered']), airline_controller.create)
router.get('/:id', airline_controller.details)
router.delete('/:id/delete', requireAuth, AuthenticationController.roleAuthorization(['registered']), airline_controller.delete)
router.put('/:id/update', requireAuth, AuthenticationController.roleAuthorization(['registered']),  airline_controller.update)
router.post('/:id/rate', requireAuth, AuthenticationController.roleAuthorization(['registered']), airline_controller.rate)

module.exports = router;
