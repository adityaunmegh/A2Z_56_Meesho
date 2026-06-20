var express=require('express');
<<<<<<< HEAD
var app=express();
var session=require('express-session');
var fileupload=require('express-fileupload');

var admin = require('./routes/admin.js');
var user = require('./routes/user.js');

//middle
=======
    var fileupload=require('express-fileupload');
    var session=require('express-session');
    require('dotenv').config();
    console.log(process.env.EMAIL_USER);
    var setupDatabase = require('./dbSetup');

var app = express();

// Initialize database on startup
setupDatabase();

>>>>>>> 6b8deb8592b820908f5f32245d02a88565deaee3
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(fileupload());
app.use(session({
<<<<<<< HEAD
    secret:'mysecrate',
    resave:'false',
    saveUninitialized:true
}))


app.use('/',user);
//app.use('/admin',admin);

app.listen(3000);




=======
    secret: 'mysecretkey',
    resave: false,
     saveUninitialized: true
}));
var user=require('./routes/user.js');
var admin=require('./routes/admin.js');

app.use('/',user);
app.use('/admin',admin);

app.listen(3000);
>>>>>>> 6b8deb8592b820908f5f32245d02a88565deaee3
