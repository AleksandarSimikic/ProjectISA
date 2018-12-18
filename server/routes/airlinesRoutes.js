const airline_controller = require('../controller/airlinesCont')
var express = require('express');

var router = express.Router();

router.post('/create', airline_controller.create)
router.get('/:id', airline_controller.details)
router.delete('/:id/delete', airline_controller.delete)
router.put('/:id/update', airline_controller.update)

module.exports = router;
