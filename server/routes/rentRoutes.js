const rent_controller = require('../controller/rentCont')
var express = require('express');

var router = express.Router();

router.post('/create', rent_controller.create)
router.get('/:id', rent_controller.details)
router.delete('/:id/delete', rent_controller.delete)
router.put('/:id/update', rent_controller.update)

module.exports = router;
