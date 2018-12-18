const flight_controller = require('../controller/flightsCont')
var express = require('express');

var router = express.Router();

router.post('/create', flight_controller.create)
router.get('/:id', flight_controller.details)
router.delete('/:id/delete', flight_controller.delete)
router.put('/:id/update', flight_controller.update)

module.exports = router;
