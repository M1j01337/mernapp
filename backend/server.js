const {errorHandler} = require('./middleware/errorMiddleware')
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const colors = require('colors');
const port = process.env.PORT || 5000;

connectDB();

const app = express();


// parse JSON payloads
app.use(express.json());

// parse URL-encoded payloads
app.use(express.urlencoded({ extended: false }));

// express routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)



app.listen(port, () => console.log(`Server started on port ${port}`));