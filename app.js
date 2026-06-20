var express = require('express');
var app = express();

var session = require('express-session');
var fileupload = require('express-fileupload');
require('dotenv').config();

var setupDatabase = require('./dbSetup');
var admin = require('./routes/admin.js');
var user = require('./routes/user.js');

// Initialize database on startup
setupDatabase();

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

// Routes
app.use('/', user);
app.use('/admin', admin);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});