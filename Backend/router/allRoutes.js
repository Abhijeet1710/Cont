const express = require('express');
const userController = require('../controllers/userController');
const routing = express.Router();



routing.get('/users', userController.getAllUsers);

routing.post('/user/register', userController.registerUser);

routing.post('/user/login', userController.loginUser);

routing.post('/user/update', userController.updateData);




// _______________________________________________________________________

routing.get('**', async (req, res) => {

    res.status(200).json({"message": "Default Route"});
});

module.exports = routing;