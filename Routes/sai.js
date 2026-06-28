var express = require('express');
var router = express.Router();
var db=require('../db.js');
var path = require('path');
var fs=require('fs');
var { sendOTP } = require('../utils/sendOTP');

router.get('/',(req,res)=>{
//    res.render('login.ejs')
    res.send('This Routes is for Sai');
});



module.exports = router;
