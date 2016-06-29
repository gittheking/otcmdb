const express   = require('express');
const logger    = require('morgan');
const apiRoute  = require('./routes/api');

const app       = express();
const port      = process.env.PORT || 3000;

// declaring db
let cruiseDB;

// setting up morgan logger
app.use(logger('dev'));

// Setting up the api route
app.use('/api', apiRoute);

app.listen(port, function(req, res) {
  console.log('Server is listening port ',port);
});