var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/logout', function(req,res,next){
  res.session = null
  res.redirect('/')
})

router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }), function(req,res,next){
})

module.exports = router;
