var express=require('express');
var app=express();
var session=require('express-session');
var fileupload=require('express-fileupload');

var admin = require('./routes/admin.js');
var user = require('./routes/user.js');

//middle
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(fileupload());
app.use(session({
    secret:'mysecrate',
    resave:'false',
    saveUninitialized:true
}))


//app.use('/',user);
//app.use('/admin',admin);

app.listen(3000);




