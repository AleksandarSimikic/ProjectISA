const airline_controller = require('../controller/airlinesCont')
var express = require('express');
var passport = require('passport')
var AuthenticationController = require('../controller/userCont')
var reportCont = require('../controller/reportController/airlineReportCont')

require('../config/passport')
var requireAuth = passport.authenticate('jwt', {session: false});

var router = express.Router();


router.post('/create', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), airline_controller.create)
router.get('/:id', airline_controller.details)
router.delete('/delete/:id', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']), airline_controller.delete)
router.put('/update/:id', requireAuth, AuthenticationController.roleAuthorization(['airlineadmin']),  airline_controller.update)
router.post('/rate/:id', requireAuth, AuthenticationController.roleAuthorization(['registered']), airline_controller.rate)
router.get('/airlines/all', airline_controller.allairlines)
router.get('/:id/flights', airline_controller.flights)

module.exports = router;
