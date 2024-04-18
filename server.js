const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define routes
app.use('/api', require('./routes'));

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
