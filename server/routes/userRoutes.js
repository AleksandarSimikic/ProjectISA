const user_controller = require('../controller/userCont')
var express = require('express');

var router = express.Router();

router.post('/create', user_controller.create)
router.get('/:id', user_controller.details)
router.delete('/:id/delete', user_controller.delete)
router.put('/:id/update', user_controller.update)
router.post('/login', user_controller.login)

module.exports = router;
