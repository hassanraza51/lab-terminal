var express = require('express');
var router = express.Router();
var Login=require("../models/login")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wellcome to Shopping Site' });
});
module.exports = router;
