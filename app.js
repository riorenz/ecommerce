const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userAuth');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Use routes
app.use('/', userRoutes);

// Start the server
app.listen(3300, () => {
    console.log(`Server running on http://localhost:3300`);
});
