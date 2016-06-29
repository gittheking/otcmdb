const router          = require('express').Router();
const {searchMovies}  = require('../models/movies');

router.get('/search',searchMovies,function(req,res) {
  res.json(res.data);
});

module.exports = router;