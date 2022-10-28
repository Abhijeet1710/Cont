const express = require('express');
const userController = require('../controllers/userController');
const routing = express.Router();



routing.get('/users', userController.getAllUsers);

routing.get('/user/:userId', userController.getUser);

routing.post('/user/register', userController.registerUser);

routing.post('/user/login', userController.loginUser);

routing.post('/user/update', userController.updateData);




// _______________________________________________________________________


routing.get('/user/test/:u/:p', userController.test);

routing.get('**', async (req, res) => {

    res.status(200).json({"message": "Default Route"});
});

module.exports = routing;