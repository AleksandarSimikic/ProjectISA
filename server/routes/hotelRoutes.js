const hotel_controller = require('../controller/hotelCont')
var express = require('express');

var router = express.Router();

router.post('/create', hotel_controller.create)
router.get('/:id', hotel_controller.details)
router.delete('/:id/delete', hotel_controller.delete)
router.put('/:id/update', hotel_controller.update)

// router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req, res) => {
//   res.send('It worked. User id is: ' + req.user._id)
// })

module.exports = router;
