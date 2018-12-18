const airport_controller = require('../controller/airportCont')
var express = require('express');

var router = express.Router();

router.post('/create', airport_controller.create)
router.get('/:id', airport_controller.details)
router.delete('/:id/delete', airport_controller.delete)
router.put('/:id/update', airport_controller.update)

module.exports = router;
