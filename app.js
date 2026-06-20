var express = require('express');
var session = require('express-session');
var fileupload = require('express-fileupload');
require('dotenv').config();

var app = express();

var setupDatabase = require('./dbSetup');
var admin = require('./Routes/admin.js');
var user = require('./Routes/user.js');

// Initialize database on startup
setupDatabase();

// View engine and middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

// Session
app.use(session({
    secret: process.env.SESSION_SECRET || 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

// Mount routes
app.use('/', user);
app.use('/admin', admin);

// Start server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Server running on port ' + PORT);
});
