var express = require('express');
var passport = require('passport')
var AuthenticationController = require('../controller/userCont')

require('../config/passport')
var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});
// require('../config/passport')(passport)

var router = express.Router();
var authRoutes = express.Router();


 router.use('/auth', authRoutes)   
authRoutes.post('/register', AuthenticationController.register)
authRoutes.post('/login', requireLogin, AuthenticationController.login)
authRoutes.get('/protected', requireAuth, function(req, res) {
    res.send({ content: "Success"})
})

// router.post('/register', user_controller.create)
router.get('/:id', AuthenticationController.details)
router.delete('/delete/:id', requireAuth, AuthenticationController.roleAuthorization(['registered']), AuthenticationController.delete)
router.put('/update/:id', requireAuth, AuthenticationController.roleAuthorization(['registered']), AuthenticationController.update)
// router.post('/login', user_controller.login)
router.get('/logout/:id', requireAuth, AuthenticationController.roleAuthorization(['registered']), AuthenticationController.logout)
router.get('/tickets/:id', requireAuth, AuthenticationController.roleAuthorization(['registered']), AuthenticationController.tickets)
router.delete('/ticket/unreserve/:id', requireAuth, AuthenticationController.roleAuthorization(['registered']), AuthenticationController.unreserve)
router.get('/users/all', AuthenticationController.allusers)

module.exports = router;





// module.exports = function(app){

    // Auth Routes
    // apiRoutes.use('/auth', authRoutes);

    // authRoutes.post('/register', AuthenticationController.register);
    // authRoutes.post('/login', requireLogin, AuthenticationController.login);

    // authRoutes.get('/protected', requireAuth, function(req, res){
    //     res.send({ content: 'Success'});
    // });

    // // Todo Routes
    // apiRoutes.use('/todos', todoRoutes);

    // todoRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['reader','creator','editor']), TodoController.getTodos);
    // todoRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['creator','editor']), TodoController.createTodo);
    // todoRoutes.delete('/:todo_id', requireAuth, AuthenticationController.roleAuthorization(['editor']), TodoController.deleteTodo);

    // Set up routes

