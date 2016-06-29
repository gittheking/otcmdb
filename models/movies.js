const fs            = require('fs');
const DB_LOCATION   = './cruisemovies.json';

let cruiseDB;

function findByTitle(title) {
  return cruiseDB.filter(function(movie) {
    return movie.Title.indexOf(title) >= 0;
  });
}

function findByDirector(director) {
  return cruiseDB.filter(function(movie) {
    return movie.Director.indexOf(director) >= 0;
  });
}

function findByYear(year) {
  return cruiseDB.filter(function(movie) {
    return movie.Year.indexOf(year) >= 0;
  });
}

function findById(id) {
  return cruiseDB.filter(function(movie) {
    return movie.imdbID.indexOf(id) >= 0;
  });
}

function searchMovies(req, res, next) {
  // Reads json file and saves into cruiseDB
  fs.readFile(DB_LOCATION, 'utf-8', function(err, data) {
    if(err) throw err;
    cruiseDB = JSON.parse(data);
    
    // Filtering cruiseDB depending on req.query
    if('id' in req.query) res.data = findById(req.query.id);
    if('y' in req.query)  res.data = findByYear(req.query.y);
    if('t' in req.query)  res.data = findByTitle(req.query.t);
    if('d' in req.query)  res.data = findByDirector(req.query.d);
  
    next();
  });
}

module.exports = { searchMovies };