var express = require('express');
<<<<<<< HEAD
=======
var app = express();

>>>>>>> d3ec854b1a2c1ebcbbc0f722e2b5acf702c62fc8
var session = require('express-session');
var fileupload = require('express-fileupload');
require('dotenv').config();

<<<<<<< HEAD
var app = express();

var setupDatabase = require('./dbSetup');
var admin = require('./Routes/admin.js');
var user = require('./Routes/user.js');
=======
var setupDatabase = require('./dbSetup');
var admin = require('./routes/admin.js');
var user = require('./routes/user.js');
>>>>>>> d3ec854b1a2c1ebcbbc0f722e2b5acf702c62fc8

// Initialize database on startup
setupDatabase();

<<<<<<< HEAD
// View engine and middleware
=======
// Middleware
>>>>>>> d3ec854b1a2c1ebcbbc0f722e2b5acf702c62fc8
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

// Session
app.use(session({
<<<<<<< HEAD
    secret: process.env.SESSION_SECRET || 'mysecretkey',
=======
    secret: 'mysecretkey',
>>>>>>> d3ec854b1a2c1ebcbbc0f722e2b5acf702c62fc8
    resave: false,
    saveUninitialized: true
}));

<<<<<<< HEAD
// Mount routes
app.use('/', user);
app.use('/admin', admin);

// Start server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Server running on port ' + PORT);
});
=======
// Routes
app.use('/', user);
app.use('/admin', admin);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
>>>>>>> d3ec854b1a2c1ebcbbc0f722e2b5acf702c62fc8
