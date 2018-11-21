var User = require('../models/userModel');
var express = require('express');
var router = express.Router();

router.post('/autenticate', function(req, res) {
    if (req.body.username && req.body.password ) {
        User.findOne({ username: req.body.username, password: req.body.password }, function(err, todos) {
            if (err) throw err;

            if (todos) {
                res.send(todos);
            } else {
                res.send('Err.login.userNotFound');
            }
        });
    }
    else {
        res.send('Err.login.requiredFieldsNotFound');
    }
});

module.exports = router;
