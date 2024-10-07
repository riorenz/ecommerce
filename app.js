// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');
const expressLayouts = require('express-ejs-layouts');
const adminRoutes = require('./routes/adminRoutes'); // Ensure the correct relative path

const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // This refers to 'views/layout.ejs'

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRoutes); // Use the admin routes

// Redirect root to /admin
app.get('/', (req, res) => {
    res.redirect('/admin');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
