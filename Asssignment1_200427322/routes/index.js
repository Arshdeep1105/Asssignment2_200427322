/* 
* File Name: index.js
* Author's name:  Arshdeep Singh
* Website name: Drink Management
* File description: this is the main file of project as it conatin the request url and also the title. It is a js file.
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Drink Management' });
});
/* GET about me page. */
router.get('/drinks', function (req, res) {
    res.render('drinks', { title: 'Drinks' });
});
/* GET services page. */
router.get('/login', function (req, res) {
    res.render('login', { title: 'Login' });
});
/* GET contact page. */
router.get('/register', function (req, res) {
    res.render('register', { title: 'Register' });
});




module.exports = router;
