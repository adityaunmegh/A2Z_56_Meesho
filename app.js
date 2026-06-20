var express=require('express');
    var fileupload=require('express-fileupload');
    var session=require('express-session');
    require('dotenv').config();
    console.log(process.env.EMAIL_USER);
    var setupDatabase = require('./dbSetup');

var app = express();

// Initialize database on startup
setupDatabase();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(fileupload());
app.use(session({
    secret: 'mysecretkey',
    resave: false,
     saveUninitialized: true
}));
var user=require('./routes/user.js');
var admin=require('./routes/admin.js');

app.use('/',user);
app.use('/admin',admin);

app.listen(3000);