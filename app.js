const express = require('express');
const app = express();

const session = require('express-session');
const fileupload = require('express-fileupload');
require('dotenv').config();

const setupDatabase = require('./dbSetup');
const admin = require('./routes/admin');
const user = require('./routes/user');

// Database
setupDatabase();

// View Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

// Session
app.use(session({
    secret: process.env.SESSION_SECRET || 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

// Routes
app.use('/', user);
app.use('/admin', admin);

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});